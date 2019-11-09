//hero slide show

var i = 0;
var images = [];
var time = 3000;

//image list
images[0] = "img/bluestreaklogo.jpg";
images[1] = "img/blue2019drumpster.jpg"
images[2] = "img/wheeliejammer.jpg"
images[3] = "img/galslogo.jpg";
images[4] = "img/2019winning.jpg";
images[5] = "img/gals2019.jpg";
images[6] = "img/galsatcorry.jpg";
images[7] = "img/galsrule2019.jpg";
images[8] = "img/woncorry2018.jpg"


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

//end slideshow
