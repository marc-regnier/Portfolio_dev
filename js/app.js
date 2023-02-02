var slider = document.querySelector(".slider");
console.log(slider);
var slides = slider.children;
var currentSlide = 0;

var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");

function moveToNextSlide() {
  slides[currentSlide].classList.remove("current");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("current");
}

function moveToPrevSlide() {
  slides[currentSlide].classList.remove("current");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("current");
}

nextButton.addEventListener("click", moveToNextSlide);
prevButton.addEventListener("click", moveToPrevSlide);