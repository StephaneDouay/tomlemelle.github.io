var i = 0;
var images = [];
var time = 4000;

images[0] = 'img/ppae.png';
images[1] = 'img/developpement.png';
images[2] = 'img/pslr.png';

function changeImg(){
  document.slide.src = images[i];
    if(i < images.length - 1){
      i++;
    } else {
      i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg();
