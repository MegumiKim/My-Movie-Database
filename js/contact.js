const form = document.querySelector("#contact-form");
const userName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const texts = document.querySelector("#texts");
const message = document.querySelector(".message-container");
const nameError = document.querySelector(".name-error");
const subjectError = document.querySelector(".subject-error");
const addressError = document.querySelector(".address-error");
const emailError = document.querySelector(".email-error");
const errorMessage = document.querySelectorAll(".form-error");
const textsError = document.querySelectorAll(".texts-error");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  if (validateForm()) {
    errorMessage.innerHTML = "";
    message.innerHTML = displayMessage("success", "Message Sent Successfully");
    form.reset();
  }
}

function validateForm(event) {
  if (checkInputLength(userName, 2, nameError));
  if (checkInputLength(subject, 10, subjectError));
  if (checkInputLength(address, 25, addressError));
  if (checkInputLength(texts, 25, textsError));
  if (validateEmail(email.value)) {
    return true;
  }
}

function checkInputLength(inputField, len, errorField) {
  console.log(inputField.value);
  if (inputField.value.trim().length > len) {
    return true;
  } else {
    errorField.innerHTML = `please input minimum ${len} characters`;
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMaches = regEx.test(email);
  if (patternMaches) {
    return true;
  } else {
    emailError.innerHTML = "please input valid email address";
  }
}
