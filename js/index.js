const search = document.querySelector("#search");

// fetchFilms("Godfather");

search.addEventListener("blur", function (event) {
  window.location.href = `/search-results.html?search=${this.value}`;
  // fetchFilms(this.value);
});
