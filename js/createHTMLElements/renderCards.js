import { createCard } from "./createCardHTML.js";

export function renderCards(container, films) {
  container.innerHTML = "";
  films.forEach((film) => {
    const card = createCard(film);
    container.append(card);
  });
}
