let currentSlide = 0;
let slides = document.getElementsByClassName("slide");

function next() {
  console.log("next");
  if (currentSlide === slides.length) {
    currentSlide = 0;
  } else currentSlide++;
  setSlide(currentSlide);
}

function previous() {
  console.log("previous");
  if (currentSlide === -1) {
    currentSlide = slides.length - 1;
  } else currentSlide--;
  setSlide(currentSlide);
}

function setSlide(i) {
  console.log("set slide");
  currentSlide = i;
  hideAllSlides();
  showSlide(currentSlide);
  updateCounter();
}

function updateCounter() {
  let counter = document.getElementsByClassName("counter");
  counter[0].innerHTML = currentSlide + 1 + "/" + slides.length;
}

function hideAllSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}

function showSlide(i) {
  slides[i].style.display = "block";
}
