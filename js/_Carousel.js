
//#region Games-Carousel

var slider = tns({
    container: ".Apps-Slider",
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayButtonOutput: false,
    // lazyload: true,
    mouseDrag: true,
    controls: false,
    nav: false,
    navPosition: "bottom",
    center: true,
    items: 5,
    slideBy: 1,
    speed: 300,
    gutter: 10,
    // fixedWidth: 290,
    responsive: {
        0: {
            items: 1,
            center: false
        },
        400: {
            items: 2,
            center: false,
        },
        600: {
            items: 3,
            center: false
        },
        1000: {
            items: 4,
            center: true
        },
        1200: {
            items: 5,
            center: true
        }
    }
});

var slider = tns({
    container: ".Art-Slider",
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayButtonOutput: false,
    // lazyload: true,
    mouseDrag: true,
    controls: false,
    nav: false,
    navPosition: "bottom",
    items: 2,
    slideBy: 1,
    speed: 300,
    gutter: 10,
    // fixedWidth: 490,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1,
            center: true,
        },
        600: {
            items: 2,
            center: true
        },
        1000: {
            items: 3,
            center: true
        }
    }
});

//#endregion
