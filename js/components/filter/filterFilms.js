import { renderCards } from "../../createHTMLElements/renderCards.js";
import { displayMessage } from "../../utils/displayMessage.js";

const filterInput = document.querySelector("#filter-input");
const newerThan = document.querySelector("#newer-than");
const olderThan = document.querySelector("#older-than");
const container = document.querySelector(".container");
const type = document.querySelector("#type");

export function filterFilms(cache, searchTerm) {
  let films = cache[searchTerm];

  if (filterInput.value) {
    films = films.filter((film) =>
      film.Title.toLowerCase().includes(filterInput.value.toLowerCase())
    );
  }

  if (newerThan.value) {
    films = films.filter((film) => film.Year > newerThan.value);
  }

  if (olderThan.value) {
    films = films.filter((film) => film.Year < olderThan.value);
  }

  if (type.value) {
    films = films.filter((film) => film.Type === type.value);
  }

  if (!films.length) {
    container.innerHTML = displayMessage("error", "No Film Found");
    return;
  }
  renderCards(container, films);
}

// export function filterNewerThan(films) {
//   let filteredFilms = films.filter((film) => film.Year >= yearFilter.value);
//   renderCards(container, filteredFilms);
// }

// export function filterOlderThan(films) {
//   let filteredFilms = films.filter((film) => film.Year <= yearFilter.value);
//   renderCards(container, filteredFilms);
// }
