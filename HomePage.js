function showSegment(segmentId) {
    // Select all news segments and buttons
    let segments = document.querySelectorAll(".news");
    let buttons = document.querySelectorAll(".btns button");

    // Loop through all news segments to update their visibility
    segments.forEach(segment => {
        if (segment.id === segmentId) {
            segment.classList.add("active");
        } else {
            segment.classList.remove("active");
        }
    });

    // Loop through all buttons to update their active state
    buttons.forEach(button => {
        if (button.textContent.toLowerCase().includes(segmentId)) {
            button.classList.add("active");
        } else {
            button.classList.remove("active");
        }
    });
}
