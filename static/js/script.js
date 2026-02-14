function unlock() {
  const pwd = document.getElementById("passwordInput").value;
  if (pwd === "urviraut") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("main").classList.remove("hidden");
  } else {
    document.getElementById("errorMsg").innerText = "Wrong password 😜";
  }
}

// Slider
const slider = document.getElementById("loveSlider");
const loveText = document.getElementById("loveText");

slider.addEventListener("input", () => {
  let emoji = "😐";
  if (slider.value > 80) emoji = "😍";
  else if (slider.value > 50) emoji = "😊";
  else if (slider.value < 20) emoji = "😢";
  loveText.innerText = `${slider.value}% ${emoji}`;
});

// YES button
document.getElementById("yesBtn").addEventListener("click", () => {
  confetti({ particleCount: 250, spread: 120 });
  alert("Best YES ever 💖");
});

// NO button escape
const noBtn = document.getElementById("noBtn");
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * 60 + "%";
  noBtn.style.top = Math.random() * 60 + "%";
});