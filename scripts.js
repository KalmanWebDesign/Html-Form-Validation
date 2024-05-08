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

// OLD ________________________________________________________________
// // form element
// const form = document.querySelector("form");
// form.addEventListener("submit", (event) => {
//     if (!validateForm()) {
//         event.preventDefault();
//     } else {
//         form.reset();
//     };
// });

// // const email = document.getElementById('email').value;
// const phoneInput = document.getElementById('phone');

// const emailInput = document.getElementById("email");

// emailInput.addEventListener("input", (event) => {
//     const email = event.target.value; // Get the value of the email input field
//     if (!isValidEmail(email)) {
//         emailInput.classList.add("invalid-input");
//     } else {
//         emailInput.classList.remove("invalid-input");
//     }
// });

// phoneInput.addEventListener("input", (event) => {
//     const phone = event.target.value; // Get the value of the phone input field
//     console.log(event.target.value)
//     if (!isValidPhone(phone)) {
//         phoneInput.classList.add("invalid-input");
//     } else {
//         phoneInput.classList.remove("invalid-input");
//     }
// });



// // Function to validate email format using regular expression
// function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const validateEmail = emailRegex.test(email);
//     return validateEmail;
// }

// // function to validate phone with reg expr
// function isValidPhone(phone) {
//     const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
//     const validatePhone = phoneRegex.test(phone);
//     return validatePhone;
// }

// // Function to validate the form
// function validateForm() {
//     console.log("function run")

//     // Get form inputs
//     const name = document.getElementById('name').value;
//     const emailVal = document.getElementById('email').value;
//     const phoneVal = document.getElementById('phone').value;
//     // alerts
//     const nameAlert = document.getElementById("nameAlert");
//     const emailAlert = document.getElementById("emailAlert");
//     const emailAlertTwo = document.getElementById("emailAlertTwo");
//     const phoneAlert = document.getElementById("phoneAlert");
//     const phoneAlertTwo = document.getElementById("phoneAlertTwo");

//     // // Regular expression to validate phone number format
//     // const phoneRegex = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    
//     // Validate name
//     if (!name || !emailVal || !phoneVal || !isValidEmail(emailVal) || !isValidPhone(phoneVal)) {
//         console.log(name)
//         if (name === '') {
//             nameAlert.style.display = "block";

//         } else {
//             nameAlert.style.display = "none";
//         }

//         // Validate email
//         if (emailVal === '') {
//             emailAlert.style.display = "block";
//             console.log(1)

//         } else if (!isValidEmail(emailVal)) {
//             emailAlert.style.display = "none";
//             emailAlertTwo.style.display = "block";
//             console.log(2)

//         } else {
//             emailAlert.style.display = "none";
//             emailAlertTwo.style.display = "none";
//         }

//         // Validate phone number
//         if (phoneVal === '') {
//             phoneAlert.style.display = "block";

//         } else if (!isValidPhone(phoneVal)) {
//             phoneAlert.style.display = "none";
//             phoneAlertTwo.style.display = "block";
//         } else {
//             phoneAlert.style.display = "none";
//             phoneAlertTwo.style.display = "none";
//         }
//         console.log('false');
//         return false;
//     }

//     // If all validations pass, return true
//     nameAlert.style.display = "none";
//     phoneAlert.style.display = "none";
//     phoneAlertTwo.style.display = "none";
//     emailAlert.style.display = "none";
//     emailAlertTwo.style.display = "none";

//     console.log('true')
//     return true;
// }