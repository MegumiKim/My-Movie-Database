const searchBtn = document.querySelector("#search-btn");
const search = document.querySelector(".header-search");

searchBtn.addEventListener("click", searchBtnFunc);

let searchOpen = false;

export function searchBtnFunc() {
  if (!searchOpen) {
    searchOpen = true;
    search.style.display = "flex";
  } else {
    searchOpen = false;
    search.style.display = "none";
  }
}
