import {
  newestToOldest,
  oldestToNewest,
  sortFilms,
} from "./components/filter/sortFuncs.js";
import { toggleDisplay } from "./utils/toggleDisplay.js";
import { fetchFilms } from "./fetchFilms.js";
import { renderCards } from "./createHTMLElements/renderCards.js";
import { filterFilms } from "./components/filter/filterFilms.js";
import { menuBtnFunc } from "./utils/menuBtn.js";
import { searchBtnFunc } from "./utils/searchBtn.js";
import { jumpToSearchResults } from "./components/filmSearch/jumpToSearchResults.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const searchTerm = params.get("search");
const filterSortWrap = document.querySelector(".filter-sort-wrap");
const container = document.querySelector(".container");
// const searchBtn = document.querySelector("#search-button");
// const filters = document.querySelector(".filters");

let cache = sessionStorage.getItem("cache");
cache = cache ? JSON.parse(cache) : {};
let films = [];
films = cache[searchTerm];

// Show first results
fetchFilms(cache, searchTerm);

// new search
jumpToSearchResults;

// display filters/new search fields
document
  .querySelector(".show-filters-btn")
  .addEventListener("click", (event) => toggleDisplay(event, filterSortWrap));

// filter film by keyword

document
  .querySelector(".filter-btn")
  .addEventListener("click", () => filterFilms(cache, searchTerm));

// filter films by year

// document
//   .querySelector(".newer-than-btn")
//   .addEventListener("click", () => filterNewerThan(films));

// document
//   .querySelector(".older-than-btn")
//   .addEventListener("click", () => filterOlderThan(films));

// Run new search
// searchBtn.addEventListener("click", fetchFilms(cache, freshSearch.value));

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

// search.addEventListener("keypress", function (event) {
//   if (event.keyCode === 13) {
//     window.location.href = `/search-results.html?search=${this.value}`;
//   }
// });
// searchBtn.addEventListener("click", function (event) {
//   window.location.href = `/search-results.html?search=${search.value}`;
// });
