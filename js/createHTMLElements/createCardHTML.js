import { createElement } from "./createElement.js";
import { fetchPoster } from "../utils/fetchPoster.js";
import { removeFromWatchList } from "../utils/addToWatchList.js";
export function createCard(data) {
  const h2 = createElement("h2", "title", data.Title, undefined);
  const img = createElement(
    "img",
    "card-img",
    undefined,
    undefined,
    data.Poster,
    data.Title
  );

  const year = createElement("p", "year", data.Year, undefined);

  const textWrap = createElement("div", "card-texts", undefined, [h2, year]);
  const card = createElement("a", "card", undefined, [img, textWrap]);
  card.href = `film.html?id=${data.imdbID}`;
  return card;
}

export async function createWatchListCard(film) {
  console.log(film);
  const poster = await fetchPoster(film);
  const h2 = createElement("h2", "title", film.name, undefined);
  const img = createElement(
    "img",
    "card-img",
    undefined,
    undefined,
    poster,
    film.name
  );
  const removeBtn = createElement("button", "remove", "Remove", undefined);
  removeBtn.addEventListener("click", removeFromWatchList);
  // const textWrap = createElement("div", "card-texts", undefined, h2);
  const card = createElement("a", "card", undefined, [img, h2, removeBtn]);
  img.href = `film.html?id=${film.id}`;
  return card;
}
