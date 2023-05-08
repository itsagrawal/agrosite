const menBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const menu = document.querySelector(".menu");
const offset = 50;
var headerBg = document.getElementById("bg");
window.addEventListener("scroll", function () {
  headerBg.style.opacity = 1 - +window.pageYOffset / 550 + "";
  headerBg.style.top = +window.pageYOffset + "px";
  headerBg.style.backgroundPositionY = -+window.pageYOffset / 2 + "px";
});

menBtn.addEventListener("click", () => {
  menu.classList.toggle("menu-open");
});
window.addEventListener("scroll", () => {
  if (pageYOffset > offset) {
    navbar.classList.add("navbar-active");
  } else {
    navbar.classList.remove("navbar-active");
  }
});
