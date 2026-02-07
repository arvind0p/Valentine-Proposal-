const title = document.getElementById("title");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.querySelector(".buttons");
const countdown = document.getElementById("countdown");
const countText = document.getElementById("countText");
const card = document.getElementById("card");

/* ===============================
   ✏️ CHANGE NAME HERE ONLY
================================ */
const HER_NAME = "Rishika";   // ← yahan naam badlo bas

/* ===============================
   💘 DAILY VALENTINE MESSAGE
================================ */
function getDailyMessage() {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;

  if (month === 2) {
    if (day === 14) {
      return `❤️ Happy Valentine’s Day, ${HER_NAME} ❤️

From the moment you entered my life,
everything felt warmer and more meaningful.
You are my calm, my smile, and my favourite thought.
Today isn’t just Valentine’s Day —
it’s a reminder that my heart chose you,
and it will keep choosing you, always. 💖`;
    }

    const messages = {
      7: "🌹 Rose Day — Every rose reminds me of you.",
      8: "💍 Propose Day — My heart has already chosen you.",
      9: "🍫 Chocolate Day — Life feels sweeter with you.",
      10: "🧸 Teddy Day — You are my comfort and my safe place.",
      11: "🤞 Promise Day — I promise to choose you every day.",
      12: "🤗 Hug Day — If I could, I’d hug you a little longer today.",
      13: "💋 Kiss Day — One kiss, a thousand unspoken feelings."
    };

    return messages[day] || "💖 You mean more to me than words can say.";
  }

  return "💖 You mean more to me than words can say.";
}

/* set top message */
title.innerText = getDailyMessage();

/* ===============================
   😈 NO BUTTON – FULL SCREEN RUN
================================ */
function moveNoAnywhere() {
  const padding = 10;

  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "fixed"; // 🔥 screen edge allowed
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseenter", moveNoAnywhere);
noBtn.addEventListener("touchstart", moveNoAnywhere);

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
      showFinalScreen();
    }
  }, 1000);
});

/* ===============================
   💌 FINAL SCREEN
================================ */
function showFinalScreen() {
  const message = getDailyMessage().replace(/\n/g, "<br>");

  card.innerHTML = `
    <h1>❤️ It’s Always You ❤️</h1>

    <p style="margin-top:18px;line-height:1.8;color:#eee;">
      ${message}
      <br><br>
      If this made you smile even a little,
      send me a message. 💖
    </p>

    <a class="whatsapp"
      href="https://wa.me/919026217441?text=I%20said%20YES%20❤️%20${encodeURIComponent(HER_NAME)}%20Your%20Valentine%20page%20made%20me%20smile"
      target="_blank">
      💬 Message Arvind on WhatsApp
    </a>
  `;

  startHearts();
}

/* ===============================
   ❤️ FLOATING HEARTS
================================ */
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
