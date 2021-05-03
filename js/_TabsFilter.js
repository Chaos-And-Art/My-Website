//#region All-Tabs-Filter

// Apps Filter
function filterSelectionApps(filter) {
    var x, i
    x = document.getElementsByClassName("Apps-Card");

    if (filter == "_All") {
        filter = "";
    }
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "Apps-Card-Show");
        if (x[i].className.indexOf(filter) > -1) {
            addClass(x[i], "Apps-Card-Show");
        }
    }
}

// Art Filter is in the Masonry JS file

// Music Filter
function filterSelectionMusic(filter) {
    var x, i
    x = document.getElementsByClassName("Music-Card");

    if (filter == "_All") {
        filter = "";
    }
    for (i = 0; i < x.length; i++) {
        removeClass(x[i], "Music-Card-Show");
        if (x[i].className.indexOf(filter) > -1) {
            addClass(x[i], "Music-Card-Show");
        }
    }
    hideContent();
}

function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

//#endregion


///////////////////////////////////////////////////////////////////////////////
//Art Tab Control

function toLink(link){
    window.location.href = link;
}

function onDrawings() {
    // $('.Popup-Drawings .Popups-Overlay').css("opacity", "1")
    // $('.Popup-Drawings .Popups-Overlay').css("visibility", "visible")
    $('.Horizontal-Scroll').animate({scrollLeft: $('button.Active-Tab').position().left}, 0);
}

function onPaintings() {
    // $('.Popup-Paintings .Popups-Overlay').css("opacity", "1")
    // $('.Popup-Paintings .Popups-Overlay').css("visibility", "visible")
    $('.Horizontal-Scroll').animate({scrollLeft: $('button.Active-Tab').position().left}, 0);
}

/////////////////////////////////////////////////////////////////////////////////////
//Apps and Music Tab Control

$(document).on("click", ".Horizontal-Scroll > button", function () {
    var before = $('.Horizontal-Scroll button.Active-Tab');
    before.removeClass('Active-Tab');
    $(this).addClass('Active-Tab');
})

$('.next_tab').click(function(){
    $('button.Active-Tab').next('button').trigger('click');
    $('.Horizontal-Scroll').animate({scrollLeft: $('button.Active-Tab').position().left}, 500);
    $("html,body").trigger("scroll");
});

$('.prev_tab').click(function(){
    $('button.Active-Tab').prev('button').trigger('click');
    $('.Horizontal-Scroll').animate({scrollLeft: $('button.Active-Tab').position().left}, 300);
    $("html,body").trigger("scroll");
});