//GRAB HTML
var slideLeftBtn = document.getElementById("slideLeftBtn");
var slideRightBtn = document.getElementById("slideRightBtn");
var slideShowImg = document.getElementById("slideShowImg");
var slideShowImgNext = document.getElementById("slideShowImgNext");
var nav = document.getElementById("nav");
var banner = document.getElementById("banner");

//OTHER GLOBAL VARS
var currentSlide = 1;
var slideInterval = setInterval(slideForward, 5000);
var originalClasses = nav.getAttribute("class");
var canSlide = true;

//EVENT LISTENERS
slideRightBtn.addEventListener("click", slideForward, false);
slideLeftBtn.addEventListener("click", slideBackward, false);

window.addEventListener("scroll", scrollFunc, false);

//FUNCTIONS

function scrollFunc() {
    var y = window.scrollY;
    
    if (y > 150) {
        nav.setAttribute("class", "nav-scrolled");
        banner.style.display = "none";
    }
    else {
        nav.removeAttribute("class");
        banner.style.display = "inherit";
    }
}

function slideForward() {
    if (canSlide) {
        canSlide = false;
        if (currentSlide < 7) {
            currentSlide++;
        }
        else {
            currentSlide = 1;
        }
        slide(slideForward);
    }
}

function slideBackward() {
    if (canSlide) {
        canSlide = false;
        if (currentSlide > 1) {
            currentSlide--;
        }
        else {
            currentSlide = 7;
        }
        slide(slideBackward);
    }
}

function slide(direction) {

    slideShowImgNext.setAttribute("src", "images/slideshow/slideshow" + (currentSlide) + ".png");
    slideShowImg.style.transition = "opacity 750ms";
    slideShowImg.style.opacity = 0;
    
    setTimeout(function(){
        slideShowImg.setAttribute("src", "images/slideshow/slideshow" + currentSlide + ".png");
        slideShowImg.style.transition = "opacity 0ms";
        slideShowImg.style.opacity = 1;
        canSlide = true;
    }, 750);
    
    clearInterval(slideInterval);
    slideInterval = setInterval(direction, 3750);
}
