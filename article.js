//Codes for formatting image heights
$(document).ready(function() {
  var imagesLoaded = 0;
  var totalImages = $('img').length;
  $('img').each(function(idx, img) {
    $('<img>').on('load', imageLoaded).attr('src', $(img).attr('src'));
  });
  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded == totalImages) {
      allImagesLoaded();
    }
  }

  function allImagesLoaded() {
  var allimages = $('.subfigures img');
  for (var i=0; i<allimages.length; i++) {
      if (allimages[i].clientHeight>400) {
         allimages[i].classList.add("imgcss-placeholder");
         allimages[i].style.width= "50%";
      }
  }
} 
imageLoaded();
});

//Codes for formatting tables
function addSroll() {
$('table').parent().addClass('table-scroll');  
}
addSroll();