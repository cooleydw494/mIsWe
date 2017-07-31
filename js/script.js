alert("javascript works");

//GRAB HTML
var slideLeftBtn = document.getElementById("slideLeftBtn");
var slideRightBtn = document.getElementById("slideRightBtn");
var slideShowImg = document.getElementById("slideShowImg");
var slideShowImgNext = document.getElementById("slideShowImgNext");

//OTHER GLOBAL VARS
var currentSlide = 1;
var slideInterval = setInterval(slideForward, 5000);

//EVENT LISTENERS
slideRightBtn.addEventListener("click", slideForward, false);
slideLeftBtn.addEventListener("click", slideBackward, false);


//FUNCTIONS

function slideForward() {
    if (currentSlide < 7) {
        currentSlide++;
    }
    else {
        currentSlide = 1;
    }
    slide(slideForward);
}

function slideBackward() {
    if (currentSlide > 1) {
        currentSlide--;
    }
    else {
        currentSlide = 7;
    }
    slide(slideBackward);
}

function slide(direction) {

    slideShowImgNext.setAttribute("src", "images/slideshow/slideshow" + (currentSlide) + ".png");
    
    slideShowImg.style.opacity = 0;
    
    setTimeout(function(){
        slideShowImg.setAttribute("src", "images/slideshow/slideshow" + currentSlide + ".png");
        slideShowImg.style.opacity = 1;
    }, 750);
    
    clearInterval(slideInterval);
    slideInterval = setInterval(direction, 3500);
}
