const nav = document.querySelector("nav");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", menuBtnFunc);
let menuOpen = false;

export function menuBtnFunc() {
  if (!menuOpen) {
    this.classList.add("open");
    menuOpen = true;
    nav.style.display = "flex";
  } else {
    this.classList.remove("open");
    menuOpen = false;
    nav.style.display = "none";
  }
}
