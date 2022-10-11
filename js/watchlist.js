import { getWatchList } from "./components/watchList/getWatchList.js";
import { displayMessage } from "./utils/displayMessage.js";
import { createWatchCardHTML } from "./createHTMLElements/createWatchCardHTML.js";
const myWatchList = getWatchList();
const container = document.querySelector(".container");
const userMessage = document.querySelector(".user-message");

export function displayWatchList() {
  if (myWatchList.length) {
    container.innerHTML = "";
    myWatchList.forEach(async function (film) {
      const card = await createWatchCardHTML(film);
      container.append(card);
    });
  } else {
    userMessage.innerHTML = displayMessage(
      "neutral",
      "No Item in My Watch List"
    );
  }
}

// myWatchList.forEach(async function (film) {
//   const poster = await fetchPoster(film);
//   container.innerHTML += `<div class="film">
//                           <img class='image' src='${poster}' /img>
//                           <h4>${film.name}</h4>
//                           <div class='remove-box'>
//                           <i class="fa-solid fa-circle-plus" data-id='${film.id}'></i>
//                           Remove</div>
//                           </div>`;

//   removeFromWatchList();
// });

displayWatchList();
