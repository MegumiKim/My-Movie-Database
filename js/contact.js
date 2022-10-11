// import { displayMessage } from "./utils/displayMessage.js";
import { menuBtnFunc } from "./utils/menuBtn.js";
import { sendForm } from "./components/contactForm/sendForm.js";

const form = document.querySelector("#contact-form");
const message = document.querySelector(".message-container");

form.addEventListener("submit", sendForm);

// function submitForm(event) {
//   event.preventDefault();
//   if (validateForm()) {
//     message.innerHTML = displayMessage("success", "Message Sent Successfully");
//     form.reset();
//   } else {
//     message.innerHTML = displayMessage("error", "Please fill all the fields");
//   }
// }
