// import { displayMessage } from "./utils/displayMessage.js";
import { menuBtnFunc } from "./utils/menuBtn.js";
import { sendForm } from "./components/contactForm/sendForm.js";

const form = document.querySelector("#contact-form");
const message = document.querySelector(".message-container");

form.addEventListener("submit", sendForm);
