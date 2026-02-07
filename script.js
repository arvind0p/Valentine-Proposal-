const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.querySelector(".buttons");
const countdownBox = document.getElementById("countdown");
const countText = document.getElementById("countText");
const container = document.querySelector(".container");

let speed = 1;

/* NO button runaway */
function moveNo() {
  speed += 0.4;

  const maxX = buttons.offsetWidth - noBtn.offsetWidth;
  const maxY = buttons.offsetHeight - noBtn.offsetHeight;

  const x = (Math.random() * maxX * speed) % maxX;
  const y = (Math.random() * maxY * speed) % maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* YES click */
yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  countdownBox.classList.remove("hidden");

  let count = 3;
  countText.innerText = count;

  const timer = setInterval(() => {
    count--;
    if (count > 0) {
      countText.innerText = count;
    } else {
      clearInterval(timer);
      showFinalMessage();
    }
  }, 1000);
});

/* Final romantic screen */
function showFinalMessage() {
  container.innerHTML = `
    <h1>❤️ It’s You ❤️</h1>
    <p style="margin-top:20px; line-height:1.8; font-size:16px;">
      In a world full of chaos, you are my calm.
      In a sky full of stars, you are my favorite light.
      I don’t want perfect days — I want real ones,
      with you, every single time.
      This isn’t just a question…
      it’s my heart choosing you. 💖
    </p>
  `;

  startHearts();
  startSparkles();
}

/* Hearts generator */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 25 + 15 + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 200);
}

/* Sparkles */
function startSparkles() {
  setInterval(() => {
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    document.body.appendChild(s);
    setTimeout(() => s.remove(), 2000);
  }, 100);
}
