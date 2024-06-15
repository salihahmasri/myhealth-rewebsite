
let scrollContainer = document.querySelector(".slider");
// getElement by using class name
let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0];
// it will scroll to the roght and left
scrollContainer.addEventListener("wheel", function(event){
    // to prevent from any error from capturing it
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
});
//click the prev button will show it to the left
prev.addEventListener("click", function(event){
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -=300;
});
//click the next button will show it to the right
next.addEventListener("click", function(event){
    //the keyword smooth wants to make sure the scroll container will run smoothly
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft +=300;
});