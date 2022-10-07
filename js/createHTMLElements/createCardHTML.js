import { createElement } from "./createElement.js";

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
