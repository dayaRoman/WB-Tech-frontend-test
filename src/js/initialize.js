export default function (data) {
    const lampFeatures = document.querySelector(".feature__general");
    const lampImage = document.querySelector(".feature__image");
    const previewLamp = document.querySelector(".preview__lamp");
    const slider = document.querySelector(".slider__list");

    const lampMaterial = lampFeatures.querySelector(".feature__material span");
    const lampDimensions = lampFeatures.querySelector(
        ".feature__dimensions span"
    );
    const lampNetWeight = lampFeatures.querySelector(
        ".feature__netWeight span"
    );
    const lampElectrification = lampFeatures.querySelector(
        ".feature__electrification span"
    );

    lampImage.src = `${data[0].image}`;
    lampMaterial.innerHTML = `${data[0].material}`;
    lampDimensions.innerHTML = `H ${data[0].height} x W ${data[0].width} x D ${data[0].width}`;
    lampNetWeight.innerHTML = `${data[0].weight}kg`;
    lampElectrification.innerHTML = `${data[0].electrification}`;

    previewLamp.src = `${data[0].image}`;

    for (let lamp of data) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.alt = "lamp-icon";
        img.src = `${lamp.image}`;
        div.classList.add("slider__item");
        div.append(img);
        slider.append(div);
    }

    slider.querySelector(".slider__item").classList.add("slider__item-active");
}
