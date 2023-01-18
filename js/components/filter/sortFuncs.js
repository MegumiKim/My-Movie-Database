export function sortFilms(cache, searchTerm) {
  let films = cache[searchTerm];
  films.sort((a, b) => (a.Title > b.Title ? 1 : -1));
  return films;
}

export function oldestToNewest(cache, searchTerm) {
  let films = cache[searchTerm];
  films.sort((a, b) => (a.Year < b.Year ? 1 : -1));
  return films;
}
export function newestToOldest(cache, searchTerm) {
  let films = cache[searchTerm];
  films.sort((a, b) => (a.Year > b.Year ? 1 : -1));
  return films;
}
Oldest;
