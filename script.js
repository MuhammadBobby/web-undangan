const nav = document.querySelector(".navbar");
const audio = document.getElementById("audio");

const offset = nav.offsetTop;

window.addEventListener("scroll", function () {
  audio.play();
  if (window.scrollY >= offset) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// untuk disable masuk ke sript Google spreedsheed
window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    }).then(() => {
      alert("Berhasil Mengonfirmasi Kehadiran Anda!");
    });
  });
});

// // backsound
// const audio = document.getElementById("audio");
// const undangan = document.getElementById("undangan");

// undangan.addEventListener("click", function () {

// });
