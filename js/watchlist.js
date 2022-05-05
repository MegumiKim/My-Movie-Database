import { getWatchList } from "./utils/getWatchList.js";
import { handleClick } from "./utils/handleClick.js";

const myWatchList = getWatchList();
const container = document.querySelector(".container");
const userMessage = document.querySelector(".user-message");

if (!myWatchList.length) {
  userMessage.innerHTML = displayMessage("error", "No Item in the Watch List");
} else {
  userMessage.innerHTML = displayMessage(
    "neutral",
    "Refresh the page after removing each item"
  );
}

myWatchList.forEach((film) => {
  container.innerHTML += `<div class="film">
  <h4>${film.name}</h4>
  <button class='remove' data-id='${film.id}'>
  <i class="fa-solid fa-circle-plus"></i>
  </button>
  </div>`;
});

function removeFromWatchList() {
  const remove = document.querySelector(".remove");
  remove.addEventListener("click", handleClick);
}

removeFromWatchList();
