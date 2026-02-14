function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.zIndex="1";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.style.animation = "floatUp 5s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 400);

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
    to { transform: translateY(-100vh); opacity: 0; }
}`;
document.head.appendChild(style);