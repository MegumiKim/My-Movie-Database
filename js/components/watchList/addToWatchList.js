import { getWatchList } from "./getWatchList.js";
import { saveItem } from "./handleClick.js";

export function addToWatchLists(event) {
  //   this.innerHTML.classList.toggle("fa-circle-plus");
  //   this.innerHTML.classList.toggle("fa-circle-minus");
  const id = this.dataset.id;
  const name = this.dataset.name;

  const currentWatchList = getWatchList();
  const filmExist = currentWatchList.find(function (film) {
    return film.id === id;
  });

  if (!filmExist) {
    const film = { id: id, name: name };
    currentWatchList.push(film);
    saveList(currentWatchList, "watch list");
    console.log(currentWatchList);
  } else {
    const newWatchList = currentWatchList.filter((film) => film.id == id);
    saveList(newWatchList, "watch list");
    console.log(newWatchList);
  }
}

export function saveList(items, name) {
  localStorage.setItem(name, JSON.stringify(items));
}

// import { handleClick } from "./handleClick.js";

// export function addToWatchList(event) {
//   // const button = document.querySelector("add-btn");
//   button.addEventListener("click", handleClick);
//   console.log(button);
// }

// export function removeFromWatchList() {
//   const remove = document.querySelector("i");
//   remove.addEventListener("click", handleClick);
// }
