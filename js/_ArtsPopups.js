var scrollPos;
function noScroll() {
  window.scrollTo(0, scrollPos);
}

$(function () {
  $("body").click(function (e) {
    if (e.target.id == "SelectedOverlay") {
      $('.Popups-Overlay-Art').css("opacity", "0")
      $('.Popups-Overlay-Art').css("visibility", "hidden")
      window.removeEventListener('scroll', noScroll);
    }
  });
})


/////////////////////////////////////////////////////////////////////////////////////////////////


$(function () {
  $("#Ferns").load("/SelectedArt/Ferns.html");
});

$("body").click(function (e) {
  if (e.target.id == "Ferns_Popup") {
    $('.Popup-Ferns .Popups-Overlay-Art').css("opacity", "1")
    $('.Popup-Ferns .Popups-Overlay-Art').css("visibility", "visible")
    scrollPos = window.pageYOffset;
    window.addEventListener('scroll', noScroll);
  }
});

//////////////////////////////////////////////////

$(function () {
  $("#Smoke").load("/SelectedArt/Smoke.html");
});

$("body").click(function (e) {
  if (e.target.id == "Smoke_Popup") {
    $('.Popup-Smoke .Popups-Overlay-Art').css("opacity", "1")
    $('.Popup-Smoke .Popups-Overlay-Art').css("visibility", "visible")
    scrollPos = window.pageYOffset;
    window.addEventListener('scroll', noScroll);
  }
});