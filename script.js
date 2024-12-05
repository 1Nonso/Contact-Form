const email = document.querySelector(".emailAddress");
const emailInput = document.getElementById("email");
const firstName = document.querySelector(".firstName");
const firstNameInput = document.getElementById("fName");
const lastName = document.querySelector(".lastName");
const lastNameInput = document.getElementById("lName");
const radioContainer = document.querySelector(".queryType");
const radioButtons = document.getElementsByName("input[name='queryType']");
const message = document.querySelector(".messageContainer");
const messageTextArea = document.getElementById("description");
const consent = document.getElementById("consent");
const consentContainer = document.querySelector(".consentContainer");
const submitButton = document.querySelector(".submit");

console.log(submitButton);
console.log(consent);
console.log(consentContainer);

const errorMessageFirstName = document.createElement("p");
errorMessageFirstName.textContent = "This field is required";
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
    event.target.style.borderColor = `red`;
  } else {
    errorMessageFirstName.remove();
    event.target.style.borderColor = ``;
  }
});

const errorMessageLastName = document.createElement("p");
errorMessageLastName.textContent = "This field is required";
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
    event.target.style.borderColor = `red`;
  } else {
    errorMessageLastName.remove();
    event.target.style.borderColor = ``;
  }
});
const errorMessageEmail = document.createElement("p");
errorMessageEmail.textContent = "Please Enter a valid Email Address";
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
    event.target.style.borderColor = `red`;
  } else {
    errorMessageEmail.remove();
    event.target.style.borderColor = ``;
  }
});

const errorTextArea = document.createElement("p");
errorTextArea.textContent = "This field is required";
errorTextArea.style.cssText = `
color: red; 
font-size: 14px;
font-weight: bold;
margin-top: 10px;
`;

messageTextArea.addEventListener("blur", (event) => {
  const messageTextAreaVariable = event.target.value.trim();
  if (messageTextAreaVariable == "") {
    message.append(errorTextArea);
    messageTextArea.style = `
    border-color: red;
    `;
  }
});

const errorMessageQuery = document.createElement("p");
errorMessageQuery.textContent = "Please select a Query Type";
errorMessageQuery.style.cssText = `
color: red; 
font-size: 14px;
font-weight: bold;
margin-top: 10px;
`;

const errorMessageConsent = document.createElement("p");
errorMessageConsent.textContent =
  "To submit this form, please consent to being contacted";
errorMessageConsent.style.cssText = `
color: red; 
font-size: 14px;
font-weight: bold;
margin-top: 10px;
margin-left: 2rem;
`;

// function validateRadioButtons() {}

// radioButtons.forEach((radio) => {
//   radio.addEventListener("change", validateRadioButtons);
// });

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNameInput = event.target.value.trim();
  const lastNameInput = event.target.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageTextAreaVariable = event.target.value.trim();

  const isAnyRadioSelected = Array.from(radioButtons).some(
    (radio) => radio.checked
  );

  if (!isAnyRadioSelected) {
    radioContainer.appendChild(errorMessageQuery);
  } else {
    if (errorMessageQuery.parentNode === radioContainer) {
      errorMessageQuery.remove();
    }
  }

  if (!consent.checked) {
    consentContainer.appendChild(errorMessageConsent);
  } else {
    errorMessageConsent.remove();
  }

  const allFieldsValid =
    firstNameInput !== "" &&
    lastNameInput !== "" &&
    emailValue !== "" &&
    emailRegex.test(emailValue) &&
    messageTextAreaVariable !== "" &&
    isRadioChecked &&
    consentCheckbox.checked;

  if (allFieldsValid) {
    form.submit();
  }
});
