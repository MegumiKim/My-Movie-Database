export async function fetchPoster(film) {
  try {
    const id = film.id;
    const url = `https://www.omdbapi.com/?apikey=f9d54557&i=${id}&plot=full`;
    const response = await fetch(url);
    const details = await response.json();

    return details.Poster;
  } catch (e) {
    console.log(e);
  }
}
