// import { createCard } from "./createHTMLElements/createCardHTML.js";
import { renderCards } from "./createHTMLElements/renderCards.js";
import { displayMessage } from "./utils/displayMessage.js";

const container = document.querySelector(".container");

export async function fetchFilms(cache, searchTerm) {
  try {
    const URL = `https://www.omdbapi.com/?apikey=f9d54557&s=${searchTerm}`;

    let films = [];
    if (!cache[searchTerm]) {
      const response = await fetch(URL);
      const json = await response.json();
      // const json = fetchAPI(URL);
      films = json.Search;

      cache[searchTerm] = films;
      sessionStorage.setItem("cache", JSON.stringify(cache));
    } else {
      console.log("Using cache");
      films = cache[searchTerm];
    }
    if (!films) {
      container.innerHTML = displayMessage("error", "No Film Found");
      return;
    }
    renderCards(container, films);
  } catch (e) {
    console.log(e);
    container.innerHTML = displayMessage(
      "error",
      "An error occurred while fetching data"
    );
  }
}
