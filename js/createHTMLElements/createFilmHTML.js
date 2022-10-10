// import { createElement } from "./createElement.js";
const container = document.querySelector(".film-container");

export function createHtml(details, id) {
  document.title = "MMDb | " + details.Title;
  container.innerHTML = `<div class='img-description-wrap'>
  <img class="film-image" src="${details.Poster}" alt="${details.Title}" /img>
                          <div class='description'>
                          <div class='title-wrapper'>
                          <h1>${details.Title}</h1>
                          <p class='rating'> 	&#11088; ${details.imdbRating} / 10</p></div>
                          <div class='text-wrapper'>
                          <div>
                          <h2>Year</h2>
                          <p>${details.Year}</p>
                          </div>
                          <div>
                          <h2>Genre</h2>
                          <p>${details.Genre}</p>
                          </div>
                          <div>
                          <h2>Language</h2>
                          <p> ${details.Language}</p>
                          </div>
                          <div>
                          <h2>Director</h2>
                          <p>${details.Director}</p>
                          </div>
                          <div>
                          <h2>Actor</h2>
                          <p>${details.Actors}</p>
                          </div>
                          <div class='add-to-watch'>
                          <i class="fa-solid fa-circle-plus" data-id='${id}' data-name='${details.Title}'></i>
                          <p>Add to Watch List</p></div>
                          </div></div></div>
                          <p class='plot'>${details.Plot}</p>
                          `;
}

// export function createFilmHTML(data) {
//   document.title = "MMDb | " + details.Title;

//   const h1 = createElement("h1", "title", data.Title, undefined);
//   const img = createElement(
//     "img",
//     "film-img",
//     undefined,
//     undefined,
//     data.Poster,
//     data.Title
//   );
//   const year = createElement("p", "year", data.Year, undefined);
//   const genre = createElement("p", "genre", data.Genre, undefined);
//   const rating = createElement("p", "rating", data.Rating, undefined);
//   const language = createElement("p", "language", data.Language, undefined);
//   const director = createElement("p", "director", data.Director, undefined);
//   const actors = createElement("p", "actors", data.actors, undefined);

//   const addBtn = createElement(
//     "button",
//     "add-btn",
//     '<i class="fa-solid fa-circle-plus"></i>'
//   );
//   addBtn.dataID = id;
//   addBtn.dataName = data.Title;
// }
