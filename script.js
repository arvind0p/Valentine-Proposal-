/* ===============================
   ELEMENTS
================================ */
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
  const params = new URLSearchParams(window.location.search);
  return params.get("name");
}

/* ===============================
   VALENTINE WEEK MESSAGES (7–13)
================================ */
const messages = {
  7: "🌹 Rose Day — Every rose I see reminds me of you, your sweet smile, and the gentle way you’ve made my heart bloom with love.",

  8: "💍 Propose Day — My heart chose you a long time ago, and every single day it falls for you all over again, without any doubt.",

  9: "🍫 Chocolate Day — Life feels so much sweeter with you in it, like every moment is wrapped in love and happiness.",

  10: "🧸 Teddy Day — You are my comfort, my safe place, and the one who makes even the simplest days feel special.",

  11: "🤞 Promise Day — I promise to care for you, support you, and choose you with the same love every single day.",

  12: "🤗 Hug Day — I really wish I could pull you into a warm hug today and hold you just a little longer.",

  13: "💋 Kiss Day — One soft kiss from you, and my heart would melt into a thousand happy feelings."
};

/* ===============================
   DAILY MESSAGE LOGIC
================================ */
function getDailyMessage() {
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const name = getNameFromURL() || "my love";

  if (month === 2) {
    // 14 Feb special
    if (day === 14) {
      return `❤️ Happy Valentine’s Day, ${name} ❤️

From the moment you came into my life,
everything felt warmer and more meaningful.
My heart chooses you — today and always. 💖`;
    }

    return messages[day] || `💖 You mean more to me than words can say, ${name}.`;
  }

  return `💖 You mean more to me than words can say, ${name}.`;
}

/* ===============================
   SET INITIAL TITLE
================================ */
if (title) {
  title.innerText = getDailyMessage();
}

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

  const timer = setInterval(() => {
    c--;
    if (c > 0) {
      countText.innerText = c;
    } else {
      clearInterval(timer);
      showFinalScreen();
    }
  }, 1000);
});

/* ===============================
   FINAL SCREEN
================================ */
function showFinalScreen() {
  const msgHTML = getDailyMessage().replace(/\n/g, "<br>");

  card.innerHTML = `
    <h1>❤️ It’s Always You ❤️</h1>

    <p style="margin-top:18px;line-height:1.7;color:#eee;">
      ${msgHTML}
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
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 250);
}
