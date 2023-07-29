const nav = document.querySelector(".navbar");

const offset = nav.offsetTop;

window.addEventListener("scroll", function () {
  if (window.scrollY >= offset) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
