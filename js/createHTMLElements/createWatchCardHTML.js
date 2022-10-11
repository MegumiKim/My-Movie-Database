import { createElement } from "./createElement.js";
import { fetchPoster } from "./fetchPoster.js";
import { removeFromWatchList } from "../components/watchList/removeFromWatchList.js";

export async function createWatchCardHTML(film) {
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
  const imgWrap = createElement("a", "img-wrap", undefined, [img]);
  const removeBtn = createElement("button", "remove", "Remove", undefined);
  imgWrap.href = `film.html?id=${film.id}`;
  removeBtn.addEventListener("click", removeFromWatchList);
  const card = createElement("div", "card", undefined, [
    imgWrap,
    h2,
    removeBtn,
  ]);
  return card;
}
