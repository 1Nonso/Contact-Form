const email = document.querySelector(".emailAddress");
const emailInput = document.getElementById("email");
const firstName = document.querySelector(".firstName");
const firstNameInput = document.getElementById("fName");
const lastName = document.querySelector(".lastName");
const lastNameInput = document.getElementById("lName");
const radioContainer = document.querySelector(".queryContainer");
const radioButtons = document.querySelectorAll('input[name="QueryType"]');
const message = document.querySelector(".messageContainer");
const messageTextArea = document.getElementById("description");
const consent = document.getElementById("consent");
const consentContainer = document.querySelector(".consentContainer");
const submitButton = document.querySelector(".submit");
const popUpOne = document.querySelector(".popUp");
const form = document.querySelector(".contactForm");

const errorMessageFirstName = document.createElement("p");
errorMessageFirstName.textContent = "This field is required";
errorMessageFirstName.style.cssText = `
  color: red; 
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;
  `;

firstNameInput.addEventListener("blur", (event) => {
  const firstNameValue = event.target.value.trim();
  if (firstNameValue == "") {
    firstName.append(errorMessageFirstName);
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
    !emailRegex.test(emailInput) ||
    emailInput == ""
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

const errorMessageQuery = document.createElement("p");
errorMessageQuery.textContent = "Please select a Query Type";
errorMessageQuery.style.cssText = `
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
  } else {
    errorTextArea.remove();
    messageTextArea.style.borderColor = ``;
  }
});

const errorMessageConsent = document.createElement("p");
errorMessageConsent.textContent =
  "To submit this form, please consent to being contacted";
errorMessageConsent.style.cssText = `
color: red; 
font-size: 14px;
font-weight: bold;
margin-bottom: 1.5rem;
`;

consent.addEventListener("blur", () => {
  if (!consent.checked) {
    consentContainer.appendChild(errorMessageConsent);
  } else {
    errorMessageConsent.remove();
  }
});

const popup = document.createElement("div");

submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  const firstNameValue = firstNameInput.value.trim();
  const lastNameValue = lastNameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const messageTextAreaValue = messageTextArea.value.trim();

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

  if (firstNameValue == "") {
    firstName.appendChild(errorMessageFirstName);
    firstNameInput.style.borderColor = `red`;
  } else {
    errorMessageFirstName.remove();
    firstNameInput.style.borderColor = ``;
  }

  if (lastNameValue == "") {
    lastName.appendChild(errorMessageLastName);
    lastNameInput.style.borderColor = `red`;
  } else {
    errorMessageLastName.remove();
    lastNameInput.style.borderColor = ``;
  }

  if (
    // !emailInput.includes("@") || !emailInput.includes(".")
    !emailRegex.test(emailValue)
  ) {
    email.appendChild(errorMessageEmail);
    emailInput.style.borderColor = `red`;
  } else {
    errorMessageEmail.remove();
    emailInput.style.borderColor = ``;
  }

  if (messageTextAreaValue == "") {
    message.append(errorTextArea);
    messageTextArea.style = `
    border-color: red;
    `;
  } else {
    errorTextArea.remove();
    messageTextArea.style = `
      border=color: ''
    `;
  }

  const allFieldsValid =
    firstNameValue !== "" &&
    lastNameValue !== "" &&
    emailValue !== "" &&
    emailRegex.test(emailValue) &&
    messageTextAreaValue !== "" &&
    isAnyRadioSelected &&
    consent.checked;

  if (allFieldsValid) {
    form.submit();
    popUpOne.classList.remove("popUp"); // Show popup
  }
});
