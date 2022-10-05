import { addToWatchList } from "./utils/addToWatchList.js";
const container = document.querySelector(".container");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const title = document.querySelector("title");
const url = `https://www.omdbapi.com/?apikey=f9d54557&i=${id}&plot=full`;

async function fetchFilm() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    createHtml(details);
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

function createHtml(details) {
  document.title = "MMDb | " + details.Title;
  container.innerHTML = `<img class="film-image" src="${details.Poster}" alt="${details.Title}" /img>
                          <div class='description'>
                          <h1>${details.Title}</h1>
                          <p>Year: ${details.Year}</p>
                          <p>Genre: ${details.Genre}</p>
                          <p>Rating: ${details.imdbRating} / 10</p>
                          <p>Language: ${details.Language}</p>
                          <p>Director: ${details.Director}</p>
                          <p>Actor: ${details.Actors}</p>
                          <div class='add-to-watch'>
                          <i class="fa-solid fa-circle-plus" data-id='${id}' data-name='${details.Title}'></i>
                          <p>Add to Watch List</p></div>
                          </div>
                          <p class='plot'>${details.Plot}</p>
                          `;
}
