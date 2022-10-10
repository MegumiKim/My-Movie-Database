let displayOpen = false;

export function toggleDisplay(event, target) {
  if (!displayOpen) {
    event.target.classList.add(".show");
    displayOpen = true;
    target.style.display = "flex";
  } else {
    event.target.classList.remove("show");
    displayOpen = false;
    target.style.display = "none";
  }
}
