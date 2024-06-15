// script.js

// Initialize the slide index to 1 (first slide)
let slideIndex = 1;

// Show the initial slide
showSlides(slideIndex);

/**
 * Increment/decrement the slide index and show the corresponding slide.
 * @param {number} n - The number to add to the current slide index.
 */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/**
 * Set the current slide based on the dot clicked.
 * @param {number} n - The slide number to show.
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/**
 * Show the slide corresponding to the current slide index and update dot indicators.
 * @param {number} n  - The current slide index.
 */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");

    // Wrap around the slide index if it goes out of bounds
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // Hide all slides and remove active class
    for (i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
        slides[i].style.transform = `translateX(-${(slideIndex - 1) * 100}%)`;
    }

    // Remove the active class from all dots
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }

    // Display the current slide and highlight the corresponding dot
    slides[slideIndex - 1].classList.add("active");
    dots[slideIndex - 1].className += " active-dot";
}
