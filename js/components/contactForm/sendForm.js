import { displayMessage } from "../../utils/displayMessage.js";

const userFeedback = document.querySelector(".user-feedback");

export async function sendForm(event) {
  event.preventDefault();
  const form = event.target;

  const response = await fetch(form.action, {
    method: form.method,
    body: new FormData(form),
  });

  console.log(response);
  userFeedback.innerHTML = displayMessage(
    "success",
    "Thank you for your message. Redirecting to home page in 5 seconds."
  );
  form.reset();
  const timer = setTimeout(function () {
    window.location = "/index.html";
  }, 5000);
}
