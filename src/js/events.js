import serverData from "./serverResponse.js";

document.onload = serverData();

const slider = document.querySelector(".slider");

// slider.addEventListener("click", (event) => {
//     let target = event.target;

//     if (target.matches(".slider__item") || target.closest(".slider__item")) {
//         if (target.matches(".slider__item")) {

//         }
//     }

// });
