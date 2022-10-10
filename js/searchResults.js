import { newSearch } from "./utils/newSearch.js";
import {
  newestToOldest,
  oldestToNewest,
  sortFilms,
} from "./utils/sortFuncs.js";
import { toggleDisplay } from "./utils/toggleDisplay.js";
import { fetchFilms } from "./displaySearchResults.js";
import { renderCards } from "./createHTMLElements/renderCards.js";
import {
  filterFilms,
  filterNewerThan,
  filterOlderThan,
} from "./utils/filterFilms.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const searchTerm = params.get("search");
const searchBtn = document.querySelector(".search-btn");
const newSearchField = document.querySelector(".new-search-field");
const filters = document.querySelector(".filters");
const container = document.querySelector(".container");

let cache = sessionStorage.getItem("cache");
cache = cache ? JSON.parse(cache) : {};
let films = [];
films = cache[searchTerm];

// Show first results
fetchFilms(cache, searchTerm);

// display filters/new search fields
document
  .querySelector(".show-new-search-btn")
  .addEventListener("click", (event) => toggleDisplay(event, newSearchField));
document
  .querySelector(".show-filters-btn")
  .addEventListener("click", (event) => toggleDisplay(event, filters));

// filter film by keyword

document
  .querySelector(".filter-btn")
  .addEventListener("click", () => filterFilms(films));

// filter films by year

document
  .querySelector(".newer-than-btn")
  .addEventListener("click", () => filterNewerThan(films));

document
  .querySelector(".older-than-btn")
  .addEventListener("click", () => filterOlderThan(films));

// Run new search
searchBtn.addEventListener("click", newSearch);

// Sort films
document.querySelector(".newest").addEventListener("click", function () {
  const sortedFilms = newestToOldest(films);
  renderCards(container, sortedFilms);
});

document.querySelector(".oldest").addEventListener("click", function () {
  const sortedFilms = oldestToNewest(films);
  renderCards(container, sortedFilms);
});

document.querySelector(".aToZ").addEventListener("click", function () {
  const sortedFilms = sortFilms(films);
  renderCards(container, sortedFilms);
});
