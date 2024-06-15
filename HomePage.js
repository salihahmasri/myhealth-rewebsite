// Initialize slide index to the first slide
let slideIndex = 0;

// Select all slide elements and dot elements
let slides = document.querySelectorAll(".sld");
let dots = document.querySelectorAll(".dot");

// Function to show a specific slide based on the index
function showSlide(index) {
    // Loop through all slides and dots to update their state
    slides.forEach((slide, i) => {
        // Remove the 'active' class from all slides and dots
        slide.classList.remove("active");
        dots[i].classList.remove("active");

        // Add the 'active' class to the current slide and dot
        if (i === index) {
            slide.classList.add("active");
            dots[i].classList.add("active");
        }
    });
}

// Function to show the next slide
function nextSlide() {
    // Increment the slide index and loop back to the first slide if necessary
    slideIndex = (slideIndex + 1) % slides.length;
    // Show the next slide
    showSlide(slideIndex);
}

// Set an interval to automatically change the slide every 3 seconds
setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Function to show a specific news segment based on the segment ID
function showSegment(segmentId) {
    // Select all news segments and buttons
    let segments = document.querySelectorAll(".news");
    let buttons = document.querySelectorAll(".btns button");

    // Loop through all news segments to update their visibility
    segments.forEach(segment => {
        // Show the segment that matches the given ID, hide others
        segment.classList.remove("active");
        if (segment.id === segmentId) {
            segment.classList.add("active");
        }
    });

    // Loop through all buttons to update their active state
    buttons.forEach(button => {
        // Remove the 'active' class from all buttons
        button.classList.remove("active");

        // Add the 'active' class to the button that corresponds to the segment ID
        if (button.textContent.toLowerCase().includes(segmentId)) {
            button.classList.add("active");
        }
    });
}

// Initial display: Show the 'alert' segment by default
showSegment('alert');
