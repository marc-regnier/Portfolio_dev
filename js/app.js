const slider = document.querySelector(".slider");
const progressBar = document.querySelector(".progress_bar");
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
  
  console.log(progressBar);
}

function moveToPrevSlide() {
  slides[currentSlide].classList.remove("current");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("current");
  //progressBar.value -= (currentSlide / slides.length) * 100;
  if (currentSlide) {
    progressBar.value -= (currentSlide / slides.length) * 100;
    console.log(progressBar.value);
  } 
  else{
    progressBar.value = (progressBar.max / slides.length);
    //console.log(progressBar.value);
  }
}



nextButton.addEventListener("click", moveToNextSlide);
prevButton.addEventListener("click", moveToPrevSlide);