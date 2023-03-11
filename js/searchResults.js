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

let cache = sessionStorage.getItem("cache");
cache = cache ? JSON.parse(cache) : {};
let films = cache[searchTerm];


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

// Sort films
document.querySelector(".newest").addEventListener("click", function () {
  const sortedFilms = newestToOldest(cache, searchTerm);
  renderCards(container, sortedFilms);
});

document.querySelector(".oldest").addEventListener("click", function () {
  const sortedFilms = oldestToNewest(cache, searchTerm);
  renderCards(container, sortedFilms);
});

document.querySelector(".aToZ").addEventListener("click", function () {
  const sortedFilms = sortFilms(cache, searchTerm);
  renderCards(container, sortedFilms);
});
