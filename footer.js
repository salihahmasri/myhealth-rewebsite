let scrollContainer = document.querySelector(".slider");
let prev = document.getElementsByClassName("prev")[0];
let next = document.getElementsByClassName("next")[0];

scrollContainer.addEventListener("wheel", function(event){
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
});

prev.addEventListener("click", function(event){
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft -=300;
});

next.addEventListener("click", function(event){
    scrollContainer.style.scrollBehaviour = "smooth";
    scrollContainer.scrollLeft +=300;
});