function startConfetti() {
    for (let i = 0; i < 150; i++) {
        const c = document.createElement("div");
        c.innerHTML = "🎉";
        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-10px";
        c.style.fontSize = "20px";
        c.style.animation = "fall 3s linear";
        c.style.zIndex="1";
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 3000);
    }
}

const style2 = document.createElement("style");
style2.innerHTML = `
@keyframes fall {
    to { transform: translateY(100vh); opacity: 0; }
}`;
document.head.appendChild(style2);