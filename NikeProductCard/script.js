const container = document.querySelector(".container");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");

color2.addEventListener("click", () => {
  container.classList.add("change");
});

color1.addEventListener("click", () => {
  container.classList.remove("change");
});

// // ***** IN jQuery *** //
// $(document).ready(() => {
//   $(".color-2").click(() => {
//     $("div.container").addClass("change");
//   });
//   $(".color-1").click(() => {
//     $("div.container").removeClass("change");
//   });
// });
