import { getWatchList } from "./getWatchList.js";
// import { saveItem } from "./handleClick.js";

export function addToWatchLists(event) {
  toggleIcon(event.target);

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
    const newWatchList = currentWatchList.filter((film) => film.id != id);
    console.log(newWatchList);
    saveList(newWatchList, "watch list");
  }
}

export function saveList(items, name) {
  localStorage.setItem(name, JSON.stringify(items));
}

function toggleIcon(target) {
  const h2 = document.querySelector(".add-to-h2");

  target.classList.toggle("fa-circle-plus");
  target.classList.toggle("fa-circle-minus");

  if (h2.innerText === "Add To Watch List") {
    h2.innerText = "Remove from Watch List";
  } else {
    h2.innerText = "Add To Watch List";
  }
  console.log(h2);
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
