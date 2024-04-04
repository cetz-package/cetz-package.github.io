const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");
const carouselImg = document.getElementById("carousel-img");
const carouselTitle = document.getElementById("carousel-title");

const response = await fetch('/assets/images.json');
const images = await response.json();

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
  const imageData = images[currentImgIndex];
  carouselImg.style.backgroundImage = `url(/assets/${imageData.path})`;
  carouselTitle.innerText = imageData.title;
  carouselTitle.href = imageData.url;
  carouselTitle.target = '_blank';
};

setCarouselImg();
