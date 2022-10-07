const search = document.querySelector("#search");

// search.addEventListener("blur", function (event) {
//   window.location.href = `/search-results.html?search=${this.value}`;
//   // fetchFilms(this.value);
// });

search.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    window.location.href = `/search-results.html?search=${this.value}`;
  }
});
