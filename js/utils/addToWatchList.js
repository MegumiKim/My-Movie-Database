import { handleClick } from "./handleClick.js";

export function addToWatchList(event) {
  const button = document.querySelector(".addButton");
  button.addEventListener("click", handleClick);
}
