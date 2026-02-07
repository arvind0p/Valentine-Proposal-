const title = document.getElementById("title");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.querySelector(".buttons");
const countdown = document.getElementById("countdown");
const countText = document.getElementById("countText");
const card = document.getElementById("card");

/* ===============================
   🔍 NAME FROM URL (?name=Rishika)
================================ */
function getNameFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("name");
}

/* ===============================
   💘 DAILY VALENTINE MESSAGE
================================ */
function getDailyMessage() {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const name = getNameFromURL() || "my love";

  if (month === 2) {
    if (day === 14) {
      return `❤️ Happy Valentine’s Day, ${name} ❤️

From the moment you came into my life,
everything felt warmer and more meaningful.
My heart chooses you — today and always. 💖`;
    }

    const messages = {
      7: "🌹 Rose Day  Every rose reminds me of you.",
      8: "💍 Propose Day  My heart has already chosen you.",
      9: "🍫 Chocolate Day  Life feels sweeter with you.",
      10: "🧸 Teddy Day  You are my comfort.",
      11: "🤞 Promise Day  I promise to choose you every day.",
      12: "🤗 Hug Day  Wish I could hug you today.",
      13: "💋 Kiss Day  One kiss, a thousand feelings."
    };

    return messages[day] || `💖 You mean more to me than words can say, ${name}.`;
  }

  return `💖 You mean more to me than words can say, ${name}.`;
}

/* set top text */
title.innerText = getDailyMessage();

/* ===============================
   😈 NO BUTTON — FAST MOVE (CARD KE ANDAR)
================================ */
function moveNoFast() {
  const maxX = buttons.offsetWidth - noBtn.offsetWidth;
  const maxY = buttons.offsetHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseenter", moveNoFast);
noBtn.addEventListener("touchstart", moveNoFast);

/* ===============================
   💖 YES → COUNTDOWN
================================ */
yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  countdown.classList.remove("hidden");

  let count = 3;
  countText.innerText = count;

  const timer = setInterval(() => {
    count--;
    if (count > 0) {
      countText.innerText = count;
    } else {
      clearInterval(timer);
      finalScreen();
    }
  }, 1000);
});

/* ===============================
   💌 FINAL SCREEN
================================ */
function finalScreen() {
  const msgHTML = getDailyMessage().replace(/\n/g, "<br>");

  card.innerHTML = `
    <h1>❤️ It’s Always You ❤️</h1>

    <p style="margin-top:18px;line-height:1.7;color:#eee;">
      ${msgHTML}
      <br><br>
      If this made you smile,
      send me a message. 💖
    </p>

    <a class="whatsapp"
      href="https://wa.me/919026217441?text=I%20said%20YES%20❤️%20Your%20Valentine%20page%20made%20me%20smile"
      target="_blank">
      💬 Message Arvind on WhatsApp
    </a>
  `;

  startHearts();
}

/* ===============================
   ❤️ HEARTS
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
