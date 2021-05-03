//#region Back-Top Button and Header Catch
mybutton = document.getElementById("back-top");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
function toTop() {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
}

//#endregion

//#region Nav-Bar and Popups Control
var navContent = document.getElementById("Nav-Menu");

$(".Box").click(function () {
    if (navContent.checked != false) {
        navContent.checked = false;
    }
});

$(".Page").click(function () {
    if (navContent.checked != false) {
        navContent.checked = false;
    }
});

$(".Slide-Show").click(function () {
    if (navContent.checked != false) {
        navContent.checked = false;
    }
});

////////////////////////////////////////////////////////////////////////////////

$(".Popups-Overlay").click(function () {
    $('.Popups-Overlay').css("opacity", "0")
    $('.Popups-Overlay').css("visibility", "hidden")
});

$(".Apple-Popup").click(function () {
    $('.Popup-Apple .Popups-Overlay').css("opacity", "1")
    $('.Popup-Apple .Popups-Overlay').css("visibility", "visible")
})

$(".Chaos-Popup").click(function () {
    $('.Popup-Chaos .Popups-Overlay').css("opacity", "1")
    $('.Popup-Chaos .Popups-Overlay').css("visibility", "visible")
})

$(".Music-Popup").click(function () {
    $('.Popup-Music .Popups-Overlay').css("opacity", "1")
    $('.Popup-Music .Popups-Overlay').css("visibility", "visible")
})

$(".Drawing-Popup").click(function () {
    $('.Popup-Drawings .Popups-Overlay').css("opacity", "1")
    $('.Popup-Drawings .Popups-Overlay').css("visibility", "visible")
})

$(".Painting-Popup").click(function () {
    $('.Popup-Paintings .Popups-Overlay').css("opacity", "1")
    $('.Popup-Paintings .Popups-Overlay').css("visibility", "visible")
})

$(".ImgOptions-Popup").click(function () {
    $('.Popup-ImgOptions .Popups-Overlay').css("opacity", "1")
    $('.Popup-ImgOptions .Popups-Overlay').css("visibility", "visible")
})

$(".Details-Popup").click(function () {
    $('.Popup-Details .Popups-Overlay').css("opacity", "1")
    $('.Popup-Details .Popups-Overlay').css("visibility", "visible")
})

$(".GitHub-Popup").click(function () {
    $('.Popup-GitHub .Popups-Overlay').css("opacity", "1")
    $('.Popup-GitHub .Popups-Overlay').css("visibility", "visible")
})

$(".Patreon-Popup").click(function () {
    $('.Popup-Patreon .Popups-Overlay').css("opacity", "1")
    $('.Popup-Patreon .Popups-Overlay').css("visibility", "visible")
})

$(".Popup-Close").click(function () {
    $('.Popups-Overlay').css("opacity", "0")
    $('.Popups-Overlay').css("visibility", "hidden")
    $('.Popups-Overlay-Art').css("opacity", "0")
    $('.Popups-Overlay-Art').css("visibility", "hidden")
    window.removeEventListener('scroll', noScroll);
})

function confrimForm() {
    $('.Popup-Contact .Popups-Overlay').css("opacity", "1")
    $('.Popup-Contact .Popups-Overlay').css("visibility", "visible")
    setTimeout(function () {
        $('.Popup-Contact .Popups-Overlay').css("opacity", "0")
        $('.Popup-Contact .Popups-Overlay').css("visibility", "hidden")
    }, 4000);
}

//#endregion

//#region Lazy-Loading

$('.lazy').Lazy({
    scrollDirection: 'vertical',
    effect: 'fadeIn',
    visibleOnly: true,
});

// I use this lazy loader for the carousels, the jquerey one isn't good for that, but works good on the art page
$(document).ready(function () {

    var lazyloadImages;

    if ("IntersectionObserver" in window) {
        lazyloadImages = document.querySelectorAll(".lazyHome");
        var imageObserver = new IntersectionObserver(function (entries, observer) {
            console.log(observer);
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var image = entry.target;
                    image.src = image.dataset.src;
                    image.classList.remove("lazyHome");
                    imageObserver.unobserve(image);
                }
            });
        }, {
            rootMargin: "0px 0px 1800px 0px"
        }
        );

        lazyloadImages.forEach(function (image) {
            imageObserver.observe(image);
        });
    }
})


//#endregion
