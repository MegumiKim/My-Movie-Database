// import { createCard } from "../../createHTMLElements/createCardHTML";
// import { fetchAPI } from "./fetchAPI";

// let cache = sessionStorage.getItem("cache");
// cache = cache ? JSON.parse(cache) : {};

// // if (cache) {
// //   cache = JSON.parse(cache);
// // } else {
// //   cache = {};
// // }
// let films = [];
// async function fetchFilms(search) {
//   const container = document.querySelector(".container");

//   try {

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
//       const film = createCard(film);
//       content += film;
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
