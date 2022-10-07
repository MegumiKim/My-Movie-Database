import { addToWatchList } from "./utils/addToWatchList.js";
import { createHtml } from "./createHTMLElements/createFilmHTML.js";
import { displayMessage } from "./utils/displayMessage.js";
const container = document.querySelector(".film-container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const title = document.querySelector("title");
const url = `https://www.omdbapi.com/?apikey=f9d54557&i=${id}&plot=full`;

async function fetchFilm() {
  try {
    const response = await fetch(url);
    const details = await response.json();
    console.log(details);
    createHtml(details, id);
    addToWatchList();
  } catch (error) {
    console.log(error);
    container.innerHTML = displayMessage(
      "error",
      "An error occurred while fetching data"
    );
  }
}
fetchFilm();
