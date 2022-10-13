import { menuBtnFunc } from "./utils/menuBtn.js";

const search = document.querySelector("#search");
const searchBtn = document.querySelector("#search-button");
// const menuBtn = document.querySelector(".menu-btn");

// menuBtn.addEventListener("click", menuBtnFunc);
search.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    window.location.href = `/search-results.html?search=${this.value}`;
  }
});
searchBtn.addEventListener("click", function (event) {
  window.location.href = `/search-results.html?search=${search.value}`;
});
