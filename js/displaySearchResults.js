import { createCard } from "./createHTMLElements/createCardHTML.js";
import { fetchAPI } from "./fetchAPI.js";
import { displayMessage } from "./utils/displayMessage.js";

import { filterSearch } from "./utils/filterSearch.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const searchTerm = params.get("search");
const URL = `https://www.omdbapi.com/?apikey=f9d54557&s=${searchTerm}`;
const container = document.querySelector(".container");

let cache = sessionStorage.getItem("cache");
cache = cache ? JSON.parse(cache) : {};

async function fetchFilms(search) {
  try {
    let films = [];
    if (!cache[search]) {
      const response = await fetch(URL);
      const json = await response.json();
      // const json = fetchAPI(URL);
      films = json.Search;

      cache[search] = films;
      sessionStorage.setItem("cache", JSON.stringify(cache));
    } else {
      console.log("Using cache");
      films = cache[search];
    }

    if (!films) {
      container.innerHTML = displayMessage("error", "No Film Found");
      return;
    }

    container.innerHTML = "";
    films.forEach((film) => {
      const card = createCard(film);
      container.append(card);
    });
  } catch (e) {
    console.log(e);
    container.innerHTML = displayMessage(
      "error",
      "An error occurred while fetching data"
    );
  }
}

fetchFilms(searchTerm);

const searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", filterSearch);

// import { createCard } from "./createHTMLElements/createCardHTML.js";
// import { fetchAPI } from "./fetchAPI.js";

// let cache = sessionStorage.getItem("cache");
// cache = cache ? JSON.parse(cache) : {};

// if (cache) {
//   cache = JSON.parse(cache);
// } else {
//   cache = {};
// }

// async function fetchFilms(search) {
//   const container = document.querySelector(".container");

//   try {
//     let films = [];
//     if (!cache[search]) {
//       console.log("Fetching");
//       const url = `https://www.omdbapi.com/?apikey=f9d54557&s=${search}`;
//       const json = fetchAPI(url);
//       // const response = await fetch(url);
//       // const json = await response.json();
//       films = json.Search;
//       cache[search] = films;
//       sessionStorage.setItem("cache", JSON.stringify(cache));
//     } else {
//       console.log("Using cache");
//       films = cache[search];
//     }

//     if (!films) {
//       container.innerHTML = displayMessage("error", "No Film Found");
//       return;
//     }
//     console.log(films);
//     let content = "";
//     films.forEach((film) => {
//       const card = createCard(film);
//       content += card;
//     });
//     container.innerHTML = content;
//   } catch (e) {
//     console.log(e);
//     container.innerHTML = displayMessage(
//       "error",
//       "An error occurred while fetching data"
//     );
//   }
// }
