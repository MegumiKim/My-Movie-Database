import { getWatchList } from "./getWatchList.js";

export function handleClick(event) {
  this.classList.toggle("fa-circle-plus");
  this.classList.toggle("fa-circle-minus");

  console.log(this);
  const id = this.dataset.id;
  const name = this.dataset.name;

  const currentWatchList = getWatchList();
  const filmExist = currentWatchList.find(function (film) {
    return film.id === id;
  });

  if (!filmExist) {
    const film = { id: id, name: name };
    console.log(film);

    currentWatchList.push(film);
    saveItem(currentWatchList);
  } else {
    const newWatchList = currentWatchList.filter((film) => film.id !== id);
    saveItem(newWatchList);
  }
}

export function saveItem(films) {
  localStorage.setItem("watch list", JSON.stringify(films));
}
