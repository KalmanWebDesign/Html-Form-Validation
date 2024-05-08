// NEW ________________________________________________________________
// Select the form element in the document
const form = document.querySelector("form");

// Select elements representing alerts for name, email, and phone
const nameAlert = document.getElementById("nameAlert");
const emailAlert = document.getElementById("emailAlert");
const phoneAlert = document.getElementById("phoneAlert");

// Add event listener for form submission
form.addEventListener("submit", (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // If form validation passes, reset the form
    if (validateForm()) {
        form.reset();
    }
});

// Add event listener for input events within the form
form.addEventListener("input", (event) => {
    // Retrieve the element that triggered the event
    const target = event.target;
    // console.log(target);
    
    // Check if the event was triggered by the name input field
    if (target.id === 'name') {
        // console.log(target.id)
        // Show or hide the name alert based on whether the name input has a value
        nameAlert.style.display = target.value ? "none" : "block";
    } 
    // Check if the event was triggered by the email input field
    else if (target.id === 'email') {
        // Call the validateEmail function with the value of the email input field
        validateEmail(target.value);
    } 
    // Check if the event was triggered by the phone input field
    else if (target.id === 'phone') {
        // Call the validatePhone function with the value of the phone input field
        validatePhone(target.value);
    }
});

// Function to validate email format using regular expression
function validateEmail(email) {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Check if the email matches the regex pattern
    const isValid = emailRegex.test(email);
    console.log(isValid);
    // Show or hide the email alert based on the validity of the email
    emailAlert.style.display = email ? (isValid ? "none" : "block") : "block";
    // Return whether the email is valid
    return isValid;
}

// Function to validate phone format using regular expression
function validatePhone(phone) {
    // Regular expression to validate phone format (e.g., xxx-xxx-xxxx)
    const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    // Check if the phone number matches the regex pattern
    const isValid = phoneRegex.test(phone);
    // Show or hide the phone alert based on the validity of the phone number
    phoneAlert.style.display = phone ? (isValid ? "none" : "block") : "block";
    // Return whether the phone number is valid
    return isValid;
}

// Function to validate the entire form
function validateForm() {
    // Get the values of name, email, and phone input fields
    const name = document.getElementById('name').value;
    const emailVal = document.getElementById('email').value;
    const phoneVal = document.getElementById('phone').value;

    // Show or hide the name alert based on whether the name input has a value
    nameAlert.style.display = name ? "none" : "block";

    // Validate the email and phone inputs
    const isValidEmailValue = validateEmail(emailVal);
    const isValidPhoneValue = validatePhone(phoneVal);

    // Return true if all inputs are valid, otherwise false
    return name && isValidEmailValue && isValidPhoneValue;
}
