import { getWatchList } from "./utils/getWatchList.js";
import { removeFromWatchList } from "./utils/addToWatchList.js";
import { fetchPoster } from "./utils/fetchPoster.js";

const myWatchList = getWatchList();
const container = document.querySelector(".container");
const userMessage = document.querySelector(".user-message");

if (!myWatchList.length) {
  userMessage.innerHTML = displayMessage("neutral", "No Item in My Watch List");
} else {
  userMessage.innerHTML = displayMessage(
    "neutral",
    "Please refresh the page after removing each item"
  );
}

myWatchList.forEach(async function (film) {
  const poster = await fetchPoster(film);
  container.innerHTML += `<div class="film">
                          <img class='image' src='${poster}' /img>
                          <h4>${film.name}</h4>
                          <div class='remove-box'>
                          <i class="fa-solid fa-circle-plus" data-id='${film.id}'></i>
                          Remove</div>
                          </div>`;

  removeFromWatchList();
});
