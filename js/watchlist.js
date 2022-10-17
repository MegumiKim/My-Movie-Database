import { getWatchList } from "./components/watchList/getWatchList.js";
import { displayMessage } from "./utils/displayMessage.js";
import { createWatchCardHTML } from "./createHTMLElements/createWatchCardHTML.js";
import { menuBtnFunc } from "./utils/menuBtn.js";

const container = document.querySelector(".container");
const userMessage = document.querySelector(".user-message");

export function displayWatchList() {
  const myWatchList = getWatchList();
  container.innerHTML = "";
  if (myWatchList.length) {
    myWatchList.forEach(async function (film) {
      const card = await createWatchCardHTML(film);
      container.append(card);
    });
  } else {
    userMessage.innerHTML = displayMessage(
      "neutral",
      "No Item in My Watch List"
    );
  }
}
displayWatchList();
