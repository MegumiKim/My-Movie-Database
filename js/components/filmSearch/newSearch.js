import { createCard } from "../../createHTMLElements/createCardHTML.js";
import { renderCards } from "../../createHTMLElements/renderCards.js";

const titleInput = document.querySelector("#title-input");
const yearInput = document.querySelector("#year-input");
const typeSelect = document.querySelector("#genre-select");
const baseURL = `https://www.omdbapi.com/?apikey=f9d54557`;
const container = document.querySelector(".container");

export async function newSearch() {
  try {
    const titleParam = getTitleParam();
    const yearParam = getYearParam();
    const typeParam = getTypeParam();
    const newURL = baseURL + titleParam + yearParam + typeParam;

    let cache = sessionStorage.getItem("cache");
    cache = cache ? JSON.parse(cache) : {};

    const response = await fetch(newURL);
    const json = await response.json();
    const films = json.Search;
    renderCards(container, films);
  } catch (e) {
    console.log(e);
  }
}

function getTitleParam() {
  const searchedTitle = titleInput.value;
  let titleParam = "";

  if (searchedTitle) {
    titleParam = `&s=${searchedTitle}`;
  } else {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const searchTerm = params.get("search");
    titleParam = `&s=${searchTerm}`;
  }
  return titleParam;
}

function getYearParam() {
  const searchedYear = yearInput.value;
  let yearParam = "";
  if (searchedYear) {
    yearParam = `&y=${searchedYear}`;
  } else {
    yearParam = "";
  }
  return yearParam;
}
function getTypeParam() {
  const selectedType = typeSelect.value;
  let typeParam = "";

  if (selectedType) {
    typeParam = `&type=${selectedType}`;
  } else {
    typeParam = "";
  }
  return typeParam;
}
