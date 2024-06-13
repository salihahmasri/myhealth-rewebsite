let slideIndex = 0;
const slidesToShow = 5;

function showSlides() {
    const slides = document.querySelectorAll('.mySlide');
    const dots = document.querySelectorAll('.dot');

    // Hide all slides
    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    // Remove active class from dots
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

    // Show the correct slides
    for (let i = 0; i < slidesToShow; i++) {
        let index = (slideIndex + i) % slides.length;
        slides[index].style.display = 'block';
    }

    // Add active class to the current dot
    dots[slideIndex].classList.add('active');
}

function plusSlides(n) {
    const slides = document.querySelectorAll('.mySlide');
    slideIndex += n;

    // Cycle back to the beginning or end if needed
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = slides.length - slidesToShow;
    }

    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}

// Initialize the slides
document.addEventListener('DOMContentLoaded', () => {
    showSlides();
});
