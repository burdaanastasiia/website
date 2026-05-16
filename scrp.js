const folder = "img/"
const images = ["img1.jpg", "img2.jpg", "img3.webp", "img4.webp"];
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
