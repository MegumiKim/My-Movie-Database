import { renderCards } from "../../createHTMLElements/renderCards.js";
import { displayMessage } from "../../utils/displayMessage.js";

const filterInput = document.querySelector("#filter-input");
const yearFilter = document.querySelector("#filter-year");
const container = document.querySelector(".container");

export function filterFilms(films) {
  let filteredFilms = films.filter((film) =>
    film.Title.toLowerCase().includes(filterInput.value.toLowerCase())
  );
  if (filteredFilms.length) {
    renderCards(container, filteredFilms);
  } else {
    container.innerHTML = displayMessage("error", "Ooops, no results");
  }
}

export function filterNewerThan(films) {
  let filteredFilms = films.filter((film) => film.Year >= yearFilter.value);
  renderCards(container, filteredFilms);
}

export function filterOlderThan(films) {
  let filteredFilms = films.filter((film) => film.Year <= yearFilter.value);
  renderCards(container, filteredFilms);
}
