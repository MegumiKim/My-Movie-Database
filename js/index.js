const container = document.querySelector(".container");

const search = document.querySelector("#search");

async function fetchFilms(search) {
  var url = `http://www.omdbapi.com/?apikey=f9d54557&s=${search}`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    const films = json.Search;
    if (!films) {
      container.innerHTML = "No films found";
      return;
    }
    let content = "";
    films.forEach((film) => {
      content += `
        <div class='film'>
        <a href="film.html?id=${film.imdbID}" class='title'>${film.Title}</a>
        <img class='image' src='${film.Poster}' />
        <div>Year: ${film.Year}</div>
        </div>`;
    });
    container.innerHTML = content;
  } catch (e) {
    console.log(e);
  }
}

search.addEventListener("keyup", function (event) {
  console.log(this.value);

  fetchFilms(this.value);
});
