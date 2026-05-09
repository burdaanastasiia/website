const folder = "img/"
const images = ["img1.png", "img2.png", "img3.png", "img4.png"];
let currentIndex = 0;

const n = images.length
const mainImg = document.getElementById('mainImg');
const nxtBtn = document.getElementById('nxtBtn');
const prvBtn = document.getElementById('prvBtn');


function updateImage() {
  mainImg.src = folder + images[currentIndex];
  console.log("Loading path:" + mainImg.src)
}

nxtBtn.onclick = function() {
    currentIndex = (currentIndex + 1) % n;
    updateImage();
}

prvBtn.onclick = function() {
    currentIndex = (currentIndex - 1 + n) % n;
    updateImage();
}

updateImage();
