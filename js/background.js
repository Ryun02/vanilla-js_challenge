const screenImg = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"];

const chosenImage = screenImg[Math.floor(Math.random() * screenImg.length)];

const bgImage = document.createElement("img");

bgImage.src = `screenshot/${chosenImage}`;

bgImage.classList.add("bgimg");

document.body.appendChild(bgImage);