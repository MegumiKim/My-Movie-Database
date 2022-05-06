const container = document.querySelector(".container");
const search = document.querySelector("#search");

async function fetchFilms(search) {
  try {
    var url = `http://www.omdbapi.com/?apikey=f9d54557&s=${search}`;
    const response = await fetch(url);
    const json = await response.json();
    const films = json.Search;
    console.log(json);
    if (!films) {
      container.innerHTML = displayMessage("error", "No Film Found");
      return;
    }
    let content = "";
    films.forEach((film) => {
      content += `
                  <a href="film.html?id=${film.imdbID}" class='film'> 
                  <h2>${film.Title}</h2>
                  <div>Year: ${film.Year}</div>
                  <img class='image' src='${film.Poster}' alt='${film.Title}' />
                  </a>`;
    });
    container.innerHTML = content;
  } catch (e) {
    console.log(e);
    container.innerHTML = displayMessage(
      "error",
      "An error occurred while fetching data"
    );
  }
}

fetchFilms("Godfather");

search.addEventListener("keyup", function (event) {
  fetchFilms(this.value);
});
