import { validateForm } from "./utils/validateForm.js";
import { displayMessage } from "./utils/displayMessage.js";

const form = document.querySelector("#contact-form");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();
  if (validateForm()) {
    message.innerHTML = displayMessage("success", "Message Sent Successfully");
    form.reset();
  } else {
    message.innerHTML = displayMessage("error", "Please fill all the fields");
  }
}
