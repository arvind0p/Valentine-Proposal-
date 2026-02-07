const title = document.getElementById("title");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.querySelector(".buttons");
const countdown = document.getElementById("countdown");
const countText = document.getElementById("countText");
const card = document.getElementById("card");

/* =========================
   VALENTINE WEEK MESSAGES
========================= */
function getDailyMessage() {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;

  if (month === 2) {
    const messages = {
      7: "🌹 Rose Day — Every rose reminds me of you.",
      8: "💍 Propose Day — My heart has already chosen you.",
      9: "🍫 Chocolate Day — Life feels sweeter with you.",
      10: "🧸 Teddy Day — You are my comfort and my safe place.",
      11: "🤞 Promise Day — I promise to choose you every day.",
      12: "🤗 Hug Day — If I could, I’d hug you a little longer today.",
      13: "💋 Kiss Day — One kiss, a thousand unspoken feelings.",
      14: "❤️ Happy Valentine’s Day, my love ❤️"
    };

    return messages[day] || "💖 You mean more to me than words can say.";
  }

  return "💖 You mean more to me than words can say.";
}

/* set initial title */
title.innerText = getDailyMessage();

/* =========================
   NO BUTTON – FAST RUNNER
========================= */
function moveNoFast() {
  const maxX = buttons.offsetWidth - noBtn.offsetWidth;
  const maxY = buttons.offsetHeight - noBtn.offsetHeight;

  // FAST movement
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top  = Math.random() * maxY + "px";
}

noBtn.addEventListener("mouseenter", moveNoFast);
noBtn.addEventListener("touchstart", moveNoFast);

/* =========================
   YES → COUNTDOWN
========================= */
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

/* =========================
   FINAL SCREEN (AUTO MESSAGE)
========================= */
function showFinalScreen() {
  card.innerHTML = `
    <h1>❤️ It’s Always You ❤️</h1>

    <p style="margin-top:18px;line-height:1.7;color:#eee;">
      ${getDailyMessage()}
      <br><br>
      This Valentine week led me to one truth —
      my heart chooses you, again and again.
      If this made you smile even a little,
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

/* =========================
   FLOATING HEARTS
========================= */
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
