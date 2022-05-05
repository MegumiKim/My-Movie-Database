import { getWatchList } from "./utils/watchListFunctions.js";

const myWatchList = getWatchList();
const container = document.querySelector(".container");

if (!myWatchList.length) {
  container.innerHTML = displayMessage("error", "No Item in the Watch List");
}

myWatchList.forEach((film) => {
  container.innerHTML += `<div class="film">
  <h4>${film.name}<h4>
  <button class='remove'>Remove</button>
  </div>`;
});

const remove = document.querySelector(".remove");

remove.addEventListener("click", removeFromWatchList);

function removeFromWatchList() {
  console.log(this);

  const id = this.dataset.id;
  const name = this.dataset.name;

  console.log(id);
}

// localStorage.removeItem()
