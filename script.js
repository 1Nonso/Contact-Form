const email = document.querySelector(".emailAddress");
const emailInput = document.getElementById("email");
const firstName = document.querySelector(".firstName");
const firstNameInput = document.getElementById("fName");
const lastName = document.querySelector(".lastName");
const lastNameInput = document.getElementById("lName");
const errorMessage = document.querySelector(".fNameError");

console.log(firstNameInput);
console.log(lastNameInput);
console.log(errorMessage);
console.log(emailInput);

// function showErrorMessage(inputMessage, message) {
//   const existingError = inputMessage.nextElementSibling;
//   if (existingError && existingError.classList.contains("error-message")) {
//     existingError.remove();
//   }

//   const errorMessage = document.createElement("p");
//   errorMessage.textContent = message;
//   errorMessage.classList.add("error-message");

//   inputElement.insertAdjacentElement("afterend", errorMessage);
// }

// function removeErrorMessage(inputElement) {
//   const existingError = inputElement.nextElementSibling;
//   if (existingError && existingError.classList.contains("error-message")) {
//     existingError.remove();
//   }
// }

const errorMessageFirstName = document.createElement("p");
errorMessageFirstName.textContent = "This field is required";
console.log(errorMessageFirstName);
errorMessageFirstName.style.cssText = `
  color: red; 
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

firstNameInput.addEventListener("blur", (event) => {
  const firstNameInput = event.target.value.trim();
  if (firstNameInput == "") {
    firstName.appendChild(errorMessageFirstName);
  } else {
    errorMessageFirstName.remove();
  }
});

const errorMessageLastName = document.createElement("p");
errorMessageLastName.textContent = "This field is required";
console.log(errorMessageLastName);
errorMessageLastName.style.cssText = `
  color: red; 
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

lastNameInput.addEventListener("blur", (event) => {
  const lastNameInput = event.target.value.trim();
  if (lastNameInput == "") {
    lastName.appendChild(errorMessageLastName);
  } else {
    errorMessageLastName.remove();
  }
});

const errorMessageEmail = document.createElement("p");
errorMessageEmail.textContent = "Please Enter a valid Email Address";
console.log(errorMessageEmail);
errorMessageEmail.style.cssText = `
  color: red; 
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
`;

emailInput.addEventListener("blur", (event) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailInput = event.target.value.trim();
  if (
    // !emailInput.includes("@") || !emailInput.includes(".")
    !emailRegex.test(emailInput)
  ) {
    email.appendChild(errorMessageEmail);
  } else {
    errorMessageEmail.remove();
  }
});
