export function getWatchList() {
  const watchList = localStorage.getItem("watch list");
  if (!watchList) {
    return [];
  } else {
    return JSON.parse(watchList);
  }
}
