// const container = document.querySelector(".container");
// const toggle = document.querySelector toggle");

// toggle.addEventListener("click", () => {
//   container.classList.toggle("dark")
//     ? (toggle.firstElementChild.className = "far fa-moon")
//     : (toggle.firstElementChild.className = "far fa-sun");
// });

// **** Using jQuery *** //
$(document).ready(() => {
  $(".toggle").on("click", () => {
    $("div.container").toggleClass("dark");
    $(".toggle").children().toggleClass("fa-moon fa-sun");
  });
});
