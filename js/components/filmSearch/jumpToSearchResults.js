const search = document.querySelector("#search");
const searchBtn = document.querySelector("#search-button");

searchBtn.addEventListener("click", jumpToSearchResults);

search.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    jumpToSearchResults();
  }
});
export function jumpToSearchResults() {
  window.location.href = `/search-results.html?search=${search.value}`;
}
