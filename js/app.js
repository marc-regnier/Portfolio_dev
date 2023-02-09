const slider = document.querySelector(".slider");
const progressBar = document.querySelector(".progress_bar");
const progressValue = 34
let slides = slider.children;
let currentSlide = 0;

const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".prev");

function moveToNextSlide() {
  slides[currentSlide].classList.remove("current");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("current");

  if (currentSlide) {
    progressBar.value += (currentSlide / slides.length) * 100;
  } else {
    progressBar.value = (progressBar.max / slides.length);
  }
}

function moveToPrevSlide() {
  slides[currentSlide].classList.remove("current");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("current");

  if (currentSlide && progressBar.value > progressValue) {
    progressBar.value -= (currentSlide / slides.length) * 100;
  }
  else if (currentSlide && progressBar.value < progressValue) {
    progressBar.value += (currentSlide / slides.length) * 100;
  } else {
    progressBar.value = (progressBar.max / slides.length);
  }
}



nextButton.addEventListener("click", moveToNextSlide);
prevButton.addEventListener("click", moveToPrevSlide);

