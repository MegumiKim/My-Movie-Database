import { renderCards } from "../../createHTMLElements/renderCards.js";
import { displayMessage } from "../../utils/displayMessage.js";

const filterInput = document.querySelector("#filter-input");
const newerThan = document.querySelector("#newer-than");
const olderThan = document.querySelector("#older-than");
const container = document.querySelector(".container");
const type = document.querySelector("#type");

export function filterFilms(cache, searchTerm) {
  let films = [];
  films = cache[searchTerm];

  console.log(films);
  let filteredFilms = films;

  if (filterInput.value) {
    filteredFilms = films.filter((film) =>
      film.Title.toLowerCase().includes(filterInput.value.toLowerCase())
    );
    console.log(filteredFilms);
  }

  if (newerThan.value) {
    filteredFilms = filteredFilms.filter((film) => film.Year > newerThan.value);
  }

  if (olderThan.value) {
    filteredFilms = filteredFilms.filter((film) => film.Year < olderThan.value);
  }
  console.log(filteredFilms);
  if (type.value) {
    filteredFilms = filteredFilms.filter((film) => film.Type === type.value);
  }

  if (!filteredFilms.length) {
    container.innerHTML = displayMessage("error", "No Film Found");
    return;
  }
  renderCards(container, filteredFilms);
}

// export function filterNewerThan(films) {
//   let filteredFilms = films.filter((film) => film.Year >= yearFilter.value);
//   renderCards(container, filteredFilms);
// }

// export function filterOlderThan(films) {
//   let filteredFilms = films.filter((film) => film.Year <= yearFilter.value);
//   renderCards(container, filteredFilms);
// }
