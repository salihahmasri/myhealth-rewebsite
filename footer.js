let slideIndex = 5;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlide");
  let dots = document.getElementsByClassName("dot");
  let slidesPerView = 5; // Set the number of slides to display at a time
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display the current slide and the next 4 slides
  for (i = slideIndex - 1; i < slideIndex + slidesPerView - 1 && i < slides.length; i++) {
    slides[i].style.display = "inline-block";
  }
  
  // Activate the corresponding dots
  for (i = slideIndex - 1; i < slideIndex + slidesPerView - 1 && i < dots.length; i++) {
    dots[i].className += " active";
  }
}
