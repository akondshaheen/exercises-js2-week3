window.onload = slideshow;

var i = 0;
var images = [];

images[0] = "images/image2.jpeg";
images[1] = "images/image3.jpg";
images[2] = "images/image4.jpg";
images[3] = "images/image5.jpg";

console.log(images);

var pic = document.getElementById("image");





function slideshow() {

    var next = document.querySelector(".nextBtn");
    next.addEventListener("click", nButton);

    var prev = document.querySelector(".prevBtn");
    prev.addEventListener("click", prevButton);

}

function nButton() {
    if (i < images.length - 1) {
        i++;
    }
    var pic = document.querySelector("#im");
    pic.src = images[i];


}

function prevButton() {
    if (i < images.length - 1) {
        i--;
    }
    var pics = document.querySelector("#im");
    pics.src = images[i];

}



