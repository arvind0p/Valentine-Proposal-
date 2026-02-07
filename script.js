const noBtn = document.getElementById("noBtn");
const container = document.querySelector(".buttons");

let speed = 1;

// NO button move function
function moveNoButton() {
  speed += 0.4; // 🔥 speed increases every time

  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const randomX = (Math.random() * maxX * speed) % maxX;
  const randomY = (Math.random() * maxY * speed) % maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

// Desktop hover
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", moveNoButton);

// YES button
function yesClicked() {
  document.querySelector(".container").innerHTML = `
    <h1>💖 You Said YES 💖</h1>
    <p style="margin-top:20px;font-size:16px;line-height:1.7;">
      From the moment you entered my life, everything felt warmer,
      brighter, and more meaningful. You became my favorite thought,
      my comfort on hard days, and my smile on the best ones.
      I don’t just want a moment with you — I want every tomorrow,
      every laugh, every heartbeat together.
      Thank you for choosing me and for making my heart feel at home.
      Every day feels special with you, my sweetie ❤️
    </p>
  `;

  startHearts();
}

// ❤️ Hearts animation
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => heart.remove(), 5000);
  }, 300);
}

