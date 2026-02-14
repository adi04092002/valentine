const photos = [
    "/static/photo1.jpg",
    "/static/photo2.jpg",
    "/static/photo3.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    index = (index + 1) % photos.length;
    slide.src = photos[index];
}, 2500);