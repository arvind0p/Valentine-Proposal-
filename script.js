const title = document.getElementById("title");
const body = document.body;
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.querySelector(".buttons");
const countdownBox = document.getElementById("countdown");
const countText = document.getElementById("countText");
const container = document.querySelector(".container");

let speed = 1;

/* 💘 Valentine week message + background */
function applyValentineTheme() {
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;

  if (month === 2) {
    switch (day) {
      case 7:
        title.innerText = "🌹 Rose Day — Every rose reminds me of you";
        body.style.background = "radial-gradient(circle, #7b001c, #000)";
        break;
      case 8:
        title.innerText = "💍 Propose Day — Will you be mine?";
        body.style.background = "radial-gradient(circle, #3a003a, #000)";
        break;
      case 9:
        title.innerText = "🍫 Chocolate Day — Life feels sweeter with you";
        body.style.background = "radial-gradient(circle, #3b1f0f, #000)";
        break;
      case 10:
        title.innerText = "🧸 Teddy Day — You are my comfort";
        body.style.background = "radial-gradient(circle, #4b2c2c, #000)";
        break;
      case 11:
        title.innerText = "🤞 Promise Day — I promise you my heart";
        body.style.background = "radial-gradient(circle, #002b3b, #000)";
        break;
      case 12:
        title.innerText = "🤗 Hug Day — Wish I could hug you today";
        body.style.background = "radial-gradient(circle, #4d0033, #000)";
        break;
      case 13:
        title.innerText = "💋 Kiss Day — One kiss, a thousand feelings";
        body.style.background = "radial-gradient(circle, #5a001a, #000)";
        break;
      case 14:
        title.innerText = "❤️ Happy Valentine’s Day, my love ❤️";
        body.style.background = "radial-gradient(circle, #b30059, #000)";
        break;
      default:
        title.innerText = "💖 You mean more to me than words can say";
        body.style.background = "radial-gradient(circle, #1a001f, #000)";
    }
  }
}

applyValentineTheme();

/* 😈 NO button runaway */
function moveNo() {
  speed += 0.4;
  const maxX = buttons.offsetWidth - noBtn.offsetWidth;
  const maxY = buttons.offsetHeight - noBtn.offsetHeight;
  noBtn.style.left = (Math.random() * maxX * speed) % maxX + "px";
  noBtn.style.top = (Math.random() * maxY * speed) % maxY + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* 💖 YES click → countdown */
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

/* 💌 Final screen */
function showFinal() {
  container.innerHTML = `
    <h1>❤️ It’s Always You ❤️</h1>
    <p style="margin-top:20px;line-height:1.8;">
      From rose to promise, from hugs to kisses,
      every day of this week leads me to one truth —
      my heart chooses you, again and again.
      This is not just Valentine’s Day,
      this is me choosing you forever. 💖
    </p>
  `;
  startHearts();
}

/* ❤️ hearts */
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
