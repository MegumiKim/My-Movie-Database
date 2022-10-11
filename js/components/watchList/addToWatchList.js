import { handleClick } from "./handleClick.js";

export function addToWatchList(event) {
  const button = document.querySelector("i");
  button.addEventListener("click", handleClick);
}

// export function removeFromWatchList() {
//   const remove = document.querySelector("i");
//   remove.addEventListener("click", handleClick);
// }
