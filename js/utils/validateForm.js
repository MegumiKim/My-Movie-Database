const userName = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const texts = document.querySelector("#texts");
const nameError = document.querySelector(".name-error");
const subjectError = document.querySelector(".subject-error");
const addressError = document.querySelector(".address-error");
const emailError = document.querySelector(".email-error");
const textsError = document.querySelector(".texts-error");
// const errorMessage = document.querySelectorAll(".form-error");

export function validateForm() {
  if (
    checkInputLength(userName, 2, nameError) &&
    checkInputLength(subject, 10, subjectError) &&
    validateEmail(email.value) &&
    checkInputLength(address, 25, addressError) &&
    checkInputLength(texts, 5, textsError)
  ) {
    return true;
  }
}

function checkInputLength(inputField, len, errorField) {
  // console.log(inputField.value);
  if (inputField.value.trim().length >= len) {
    errorField.innerHTML = "";
    return true;
  } else {
    errorField.innerHTML = `Please input minimum ${len} characters`;
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  if (patternMatches) {
    emailError.innerHTML = "";
    return true;
  } else {
    emailError.innerHTML = "Please input valid email address";
    return false;
  }
}
