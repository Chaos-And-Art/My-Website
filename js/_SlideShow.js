//#region Slide-Show

var slideIndex = 1;
var timer;
$(document).ready(function () {
    $(".Content").delay(1).fadeIn(5);
    showSlides(slideIndex);
    timer = setInterval(function () { plusSlides(1) }, 3500);
});




// NEXT AND PREVIOUS CONTROL
function plusSlides(n) {
    clearInterval(timer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        timer = setInterval(function () { plusSlides(n + 2) }, 3500);
    } else {
        timer = setInterval(function () { plusSlides(n + 1) }, 3500);
    }
}

// IF USER SELECTS SLIDE FROM THE NAVIGATION DOTS 
function currentSlide(n) {
    clearInterval(timer);
    timer = setInterval(function () { plusSlides(n + 1) }, 3000);
    showSlides(slideIndex = n);
}

// SHOWS THE SLIDESHOW
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("Slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].className = slides[i].className.replace(" current", "");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].className += " current";
    dots[slideIndex - 1].className += " active";
}

// USED TO CREATE SWIPE DETECTIONS TO CONTROL THE SLIDES USING FORWARD OR BACK MOTIONS
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function getTouches(evt) {
    return evt.touches ||
        evt.originalEvent.touches;
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 9) {
            plusSlides(1);
        } else if (xDiff < -9) {
            plusSlides(-1);
        }
    }
    xDown = null;
    yDown = null;
};

//#endregion

