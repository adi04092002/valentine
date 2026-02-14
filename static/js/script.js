/* PASSWORD UNLOCK */
function unlock() {
  const pwd = document.getElementById("passwordInput").value;
  if (pwd === "urviraut") {   // CHANGE PASSWORD HERE
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
  } else {
    document.getElementById("errorMsg").innerText = "Wrong password 😜";
  }
}

/* SLIDESHOW */
const photos = [
  "/static/images/photo1.jpg",
  "/static/images/photo2.jpg",
  "/static/images/photo3.jpg"
];
let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  index = (index + 1) % photos.length;
  slide.style.opacity = 0;
  setTimeout(() => {
    slide.src = photos[index];
    slide.style.opacity = 1;
  }, 500);
}, 3000);

/* LOVE SLIDER */
const slider = document.getElementById("loveSlider");
const loveText = document.getElementById("loveText");

slider.addEventListener("input", () => {
  let emoji = "😐";
  if (slider.value > 80) emoji = "😍";
  else if (slider.value > 50) emoji = "😊";
  else if (slider.value < 20) emoji = "😢";
  loveText.innerText = `${slider.value}% ${emoji}`;
});

/* YES BUTTON – CONFETTI + FIREWORKS */
document.getElementById("yesBtn").addEventListener("click", () => {
  // Confetti
  confetti({ particleCount: 200, spread: 120 });

  // Fireworks
  const duration = 2 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: Math.random() * 360,
      spread: 55,
      origin: { x: Math.random(), y: Math.random() - 0.2 }
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();

  alert("She said YES 💖💍");
});

/* NO BUTTON ESCAPE */
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 70 + "%";
  noBtn.style.top = Math.random() * 70 + "%";
});