import serverData from "./serverResponse.js";

document.onload = serverData();

const slider = document.querySelector(".slider");
let sliderItems = slider.getElementsByClassName("slider__item");

slider.addEventListener("click", function (event) {
    let target = event.target;
    //let sliderItems = this.querySelectorAll(".slider__item");
    if (
        target.classList.contains("slider__item") ||
        target.closest(".slider__item")
    ) {
        if (target.classList.contains("slider__item")) {
            Array.prototype.forEach.call(sliderItems, function (item) {
                if (item.classList.contains("slider__item-active")) {
                    item.classList.remove("slider__item-active");
                }
            });
            target.classList.add("slider__item-active");
        } else {
            let parent = target.closest(".slider__item");
            Array.prototype.forEach.call(sliderItems, function (item) {
                if (item.classList.contains("slider__item-active")) {
                    item.classList.remove("slider__item-active");
                }
            });
            parent.classList.add("slider__item-active");
        }
    }
    //console.log(sliderItems);
});
