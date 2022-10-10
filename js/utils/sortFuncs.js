export function sortFilms(films) {
  films.sort((a, b) => (a.Title > b.Title ? 1 : -1));
  return films;
}

export function oldestToNewest(films) {
  films.sort((a, b) => (a.Year < b.Year ? 1 : -1));
  return films;
}
export function newestToOldest(films) {
  films.sort((a, b) => (a.Year > b.Year ? 1 : -1));
  return films;
}
