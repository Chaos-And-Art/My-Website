function resizeAllGridItems() {
  allItems = document.getElementsByClassName("Sector");
  for (x = 0; x < allItems.length; x++) {
    resizeGridItem(allItems[x]);
  }
}

function resizeGridItem(item) {
  grid = document.getElementsByClassName("Art-Gallery")[0];
  rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  rowSpan = Math.ceil((item.querySelector('.Art-Content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span " + rowSpan;
}

function resizeInstance(instance) {
  item = instance.elements[0];
  resizeGridItem(item);
}

// window.onload = resizeAllGridItems();

if ($(window).width() > 784) {
  window.addEventListener("resize", resizeAllGridItems);
}


allItems = document.getElementsByClassName("Sector");
for (x = 0; x < allItems.length; x++) {
  imagesLoaded(allItems[x], resizeInstance);
}
