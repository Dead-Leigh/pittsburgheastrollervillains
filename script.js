var i = 0;
var images = [];
var time = 3000;

//image list
images[0] = "img/bluestreaklogo.jpg";
images[1] = "img/galslogo.jpg";
images[2] = "img/bluestreaklogo.jpg";


// fun to change the image
function changeImg(){
  document.slide.src = images[i];
  if(i < images.length - 1){
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg;

// showDivs(slideIndex);
//
// function plusDivs(n) {
//   showDivs(slideIndex += n);
// }
//
// function showDivs(n) {
//   var i;
//   var x = document.getElementsByClassName("slideshow");
//   if (n > x.length) {slideIndex = 1}
//   if (n < 1) {slideIndex = x.length} ;
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   x[slideIndex-1].style.display = "block";
// }
