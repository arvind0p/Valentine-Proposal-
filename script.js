const title = document.getElementById("title");
const body = document.body;
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.querySelector(".buttons");
const countdownBox = document.getElementById("countdown");
const countText = document.getElementById("countText");
const container = document.querySelector(".container");
const tapScreen = document.getElementById("tapToStart");
const mainApp = document.getElementById("mainApp");

let speed = 1;

/* FULLSCREEN + LOCK */
tapScreen.addEventListener("click", () => {
  tapScreen.style.display = "none";
  mainApp.classList.remove("hidden");

  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  }

  if (screen.orientation && screen.orientation.lock) {
    screen.orientation.lock("portrait").catch(() => {});
  }

  applyValentineTheme();
});

/* Valentine week theme */
function applyValentineTheme() {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;

  if (month === 2) {
    const themes = {
      7: ["🌹 Rose Day — Every rose reminds me of you", "#7b001c"],
      8: ["💍 Propose Day — Will you be mine?", "#3a003a"],
      9: ["🍫 Chocolate Day — Life feels sweeter with you", "#3b1f0f"],
      10: ["🧸 Teddy Day — You are my comfort", "#4b2c2c"],
      11: ["🤞 Promise Day — I promise you my heart", "#002b3b"],
      12: ["🤗 Hug Day — Wish I could hug you today", "#4d0033"],
      13: ["💋 Kiss Day — One kiss, a thousand feelings", "#5a001a"],
      14: ["❤️ Happy Valentine’s Day, my love ❤️", "#b30059"]
    };

    if (themes[day]) {
      title.innerText = themes[day][0];
      body.style.background = `radial-gradient(circle, ${themes[day][1]}, #000)`;
    }
  }
}

/* NO button runaway */
function moveNo() {
  speed += 0.4;
  const maxX = buttons.offsetWidth - noBtn.offsetWidth;
  const maxY = buttons.offsetHeight - noBtn.offsetHeight;
  noBtn.style.left = (Math.random() * maxX * speed) % maxX + "px";
  noBtn.style.top = (Math.random() * maxY * speed) % maxY + "px";
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
      showFinal();
    }
  }, 1000);
});

/* Final message */
function showFinal() {
  container.innerHTML = `
    <h1>❤️ It’s Always You ❤️</h1>
    <p style="margin-top:20px;line-height:1.8;">
      Every day of this Valentine week leads me to you.
      This isn’t just a moment,
      this is my heart choosing you —
      today, tomorrow, always. 💖
    </p>
  `;
  startHearts();
}

/* Hearts */
function startHearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 200);
}
