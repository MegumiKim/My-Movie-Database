let displayOpen = false;

export function toggleDisplay(event, target) {
  event.target.classList.toggle("fa-circle-plus");
  event.target.classList.toggle("fa-circle-minus");
  if (!displayOpen) {
    event.target.classList.add(".show");
    displayOpen = true;
    target.style.display = "flex";
    console.log(event.target);
  } else {
    event.target.classList.remove("show");
    displayOpen = false;
    target.style.display = "none";
  }
}
