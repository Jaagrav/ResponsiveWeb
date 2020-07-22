window.addEventListener("scroll", (e) => {
  if (window.scrollY >= window.innerHeight / 2 - 100) {
    document.querySelector(".save-tigers").classList.add("stick");
    document.querySelector(".links").classList.add("stick");
  } else {
    document.querySelector(".save-tigers").classList.remove("stick");
    document.querySelector(".links").classList.remove("stick");
  }
});
document.querySelector(".mobile-menu").addEventListener("click", () => {
  document.querySelector(".mobile-menu").style.opacity = "0";
  document.querySelector(".mobile-menu").style.pointerEvents = "none";
});
document.querySelector(".menu-mobile-btn").addEventListener("click", () => {
  document.querySelector(".mobile-menu").style.opacity = "1";
  document.querySelector(".mobile-menu").style.pointerEvents = "all";
});
