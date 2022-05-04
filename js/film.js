import { addToWatchlist } from "./addToWatchlist.js";

const container = document.querySelector(".film-container");
const title = document.querySelector("title");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = `http://www.omdbapi.com/?apikey=f9d54557&i=${id}&plot=full`;

async function fetchFilm() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    // console.log(details);

    createHtml(details);
  } catch (error) {
    console.log(error);
    container.innerHTML = displayMessage(
      "error",
      "An error occurred while fetching data"
    );
  }
}

fetchFilm();

function createHtml(details) {
  title.innerHTML = "My Films | " + details.Title;
  container.innerHTML = `
  <img class="film-image" src="${details.Poster}" alt="${details.Title}" /img>
  <div class='description'>
  <h1>${details.Title}</h1>
  <p>Year: ${details.Year}</p>
  <p>Genre: ${details.Genre}</p>
  <p>Rating: ${details.imdbRating} / 10</p>
  <p>Language: ${details.Language}</p>
  <p>Actor: ${details.Actors}</p>
  <button class='addButton'>Add To Watch List</button>
  </div>
  <p class='plot'>${details.Plot}</p>
  `;

  addToWatchlist();
}
