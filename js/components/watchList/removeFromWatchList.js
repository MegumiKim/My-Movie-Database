import { displayWatchList } from "../../watchList.js";
import { getWatchList } from "./getWatchList.js";
import { saveItem } from "./handleClick.js";

export function removeFromWatchList(event) {
  const id = event.target.dataset.id;

  const currentWatchList = getWatchList();
  const newWatchList = currentWatchList.filter((film) => film.id !== id);

  saveItem(newWatchList);
  displayWatchList;
}
