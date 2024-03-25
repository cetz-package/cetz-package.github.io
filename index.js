import images from "./assets/images.json" assert { type: "json" };

const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const carouselImg = document.getElementById("carousel-img");

let currentImgIndex = 0;
const totalImages = images.length;

leftArrow.addEventListener("click", () => {
  if (currentImgIndex === 0) {
    currentImgIndex = totalImages - 1;
  } else {
    currentImgIndex -= 1;
  }
  setCarouselImg();
});

rightArrow.addEventListener("click", () => {
  if (currentImgIndex === totalImages - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex += 1;
  }
  setCarouselImg();
});

const setCarouselImg = () => {
  carouselImg.style.backgroundImage = `url(/assets/${images[currentImgIndex]})`;
};

setCarouselImg();
