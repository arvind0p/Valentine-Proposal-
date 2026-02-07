const title = document.getElementById("title");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.querySelector(".buttons");
const countdown = document.getElementById("countdown");
const countText = document.getElementById("countText");
const card = document.getElementById("card");

/* ===============================
   NAME FROM URL (?name=Rishika)
================================ */
function getNameFromURL() {
  const p = new URLSearchParams(window.location.search);
  return p.get("name");
}

/* ===============================
   DAILY VALENTINE MESSAGE
================================ */
function getDailyMessage() {
  const d = new Date();
  const day = d.getDate();
  const m = d.getMonth() + 1;
  const name = getNameFromURL() || "my love";

  if (m === 2) {
    if (day === 14) {
      return `❤️ Happy Valentine’s Day, ${name} ❤️

From the moment you came into my life,
everything felt warmer and more meaningful.
My heart chooses you — today and always. 💖`;
    }

    const msg = {
      7: "🌹 Rose Day — Every single rose reminds me of you, your smile, your warmth, and the love that quietly blooms in my heart.",
      8: "💍 Propose Day — My heart chose you long ago, and every beat still chooses you without a second thought.",
      9: "🍫 Chocolate Day — Life feels sweeter with you in it, like every moment is filled with a little more joy and love.",
     10: "🧸 Teddy Day — You are my comfort, my safe place, the one who makes everything feel okay.",
     11: "🤞 Promise Day — I promise to stand by you, choose you, and care for you every single day.",
     12: "🤗 Hug Day — I wish I could wrap you in a warm hug today and let the world fade away.",
     13: "💋 Kiss Day — One kiss from you holds a thousand emotions my words could never explain."

    };

    return msg[day] || `💖 You mean more to me than words can say, ${name}.`;
  }

  return `💖 You mean more to me than words can say, ${name}.`;
}

/* set initial title */
title.innerText = getDailyMessage();

/* ===============================
   NO BUTTON MOVE (same size)
================================ */
function moveNo() {
  const rect = buttons.getBoundingClientRect();
  const maxX = rect.width - noBtn.offsetWidth;
  const maxY = rect.height + 60;

  noBtn.style.position = "absolute";
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY - 30 + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* ===============================
   YES → COUNTDOWN
================================ */
yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  countdown.classList.remove("hidden");

  let c = 3;
  countText.innerText = c;

  const t = setInterval(() => {
    c--;
    if (c > 0) {
      countText.innerText = c;
    } else {
      clearInterval(t);
      showFinalScreen();
    }
  }, 1000);
});

/* ===============================
   FINAL SCREEN (By Arvind FIXED)
================================ */
function showFinalScreen() {
  const msg = getDailyMessage().replace(/\n/g, "<br>");

  card.innerHTML = `
    <h1>❤️ It’s Always You ❤️</h1>

    <p style="margin-top:18px;line-height:1.7;color:#eee;">
      ${msg}
    </p>

    <div style="
      margin-top:10px;
      font-size:13px;
      color:#ff7abf;
      opacity:0.9;
    ">
      — By Arvind
    </div>

    <a class="whatsapp"
      href="https://wa.me/919026217441?text=I%20said%20YES%20❤️%20Your%20Valentine%20page%20made%20me%20smile"
      target="_blank">
      💬 Message Arvind on WhatsApp
    </a>
  `;

  startHearts();
}

/* ===============================
   FLOATING HEARTS
================================ */
function startHearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerHTML = "❤️";
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 250);
}
