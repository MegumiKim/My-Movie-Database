import { displayMessage } from "./utils/displayMessage.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const searchTerm = params.get("search");
const URL = `https://www.omdbapi.com/?apikey=f9d54557&s=${searchTerm}`;
let cache = sessionStorage.getItem("cache");
cache = cache ? JSON.parse(cache) : {};
async function fetchFilms(search) {
  const container = document.querySelector(".container");

  try {
    let films = [];
    if (!cache[search]) {
      console.log("Fetching");
      const url = `https://www.omdbapi.com/?apikey=f9d54557&s=${search}`;
      const response = await fetch(url);
      const json = await response.json();
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
    console.log(films);
    let content = "";
    films.forEach((film) => {
      content += `
                  <a href="film.html?id=${film.imdbID}" class='film'> 
                  <h2>${film.Title}</h2>
                  <div>Year: ${film.Year}</div>
                  <img class='image' src='${film.Poster}' alt='${film.Title}' />
                  </a>`;
    });
    container.innerHTML = content;
  } catch (e) {
    console.log(e);
    container.innerHTML = displayMessage(
      "error",
      "An error occurred while fetching data"
    );
  }
}

fetchFilms(searchTerm);
