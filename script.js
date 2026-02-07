const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttons = document.getElementById("buttons");
const overlay = document.getElementById("overlay");
const countNum = document.getElementById("countNum");
const card = document.getElementById("card");

/* ===============================
   NAME FROM URL (?name=Rishika)
================================ */
function getName() {
  const p = new URLSearchParams(window.location.search);
  return p.get("name") || "my love";
}

/* ===============================
   DATE-WISE VALENTINE MESSAGE
   (7–14 FEB FULLY INTEGRATED)
================================ */
function getFinalMessage() {
  const d = new Date();
  const day = d.getDate();
  const m = d.getMonth() + 1;
  const name = getName();

  if (m === 2) {
    const messages = {
      7: `🌹 <b>Rose Day</b> — Every rose I see reminds me of you, ${name}, and the gentle way you’ve made my heart bloom with love.`,

      8: `💍 <b>Propose Day</b> — My heart chose you a long time ago, ${name}, and it still chooses you every single day.`,

      9: `🍫 <b>Chocolate Day</b> — Life feels sweeter with you in it, ${name}, like happiness wrapped in love.`,

      10: `🧸 <b>Teddy Day</b> — You are my comfort, my safe place, ${name}, and my peace.`,

      11: `🤞 <b>Promise Day</b> — I promise to care for you, support you, and choose you every single day, ${name}.`,

      12: `🤗 <b>Hug Day</b> — I wish I could pull you into a warm hug today, ${name}, and never let go.`,

      13: `💋 <b>Kiss Day</b> — One soft kiss from you, ${name}, and my heart melts into a thousand happy feelings.`,

      14: `❤️ <b>Happy Valentine’s Day</b> ❤️<br><br>
          ${name},<br><br>
          From the moment you came into my life, everything felt warmer and brighter.
          You became my favorite thought, my safest place, and my happiest feeling.<br><br>
          With you, love feels easy. With you, smiles feel real.
          My heart chooses you — today, tomorrow, and always. 💖`
    };

    return messages[day] || `💖 Thinking of you always, ${name}.`;
  }

  return `💖 Thinking of you always, ${name}.`;
}

/* ===============================
   NO BUTTON — RUNAWAY ONLY
================================ */
function moveNo() {
  noBtn.style.position = "fixed";
  noBtn.style.left =
    Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
  noBtn.style.top =
    Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("mousemove", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* ===============================
   YES CLICK → HEART COUNTDOWN
================================ */
yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  overlay.classList.remove("hidden");

  const seq = [3, 2, 1];
  let i = 0;

  const timer = setInterval(() => {
    countNum.innerText = seq[i];

    if (seq[i] === 1) {
      heartBlastRandom();
    }

    i++;
    if (i === seq.length) {
      clearInterval(timer);
      setTimeout(() => {
        overlay.classList.add("hidden");
        finalScreen();
      }, 3000);
    }
  }, 900);
});

/* ===============================
   RANDOM HEART BLAST (3s)
================================ */
function heartBlastRandom() {
  const start = Date.now();
  const blast = setInterval(() => {
    for (let i = 0; i < 12; i++) {
      const h = document.createElement("div");
      h.className = "heart";
      h.innerText = ["❤️", "💖", "💘", "💕", "💝"][Math.floor(Math.random() * 5)];
      h.style.left = Math.random() * window.innerWidth + "px";
      h.style.top = Math.random() * window.innerHeight + "px";
      h.style.fontSize = 16 + Math.random() * 26 + "px";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 6000);
    }
    if (Date.now() - start > 3000) clearInterval(blast);
  }, 150);
}

/* ===============================
   FINAL SCREEN
================================ */
function finalScreen() {
  card.innerHTML = `
    <div class="emoji">❤️</div>
    <h2>It’s Always You</h2>

    <div class="final-text">
      ${getFinalMessage()}
    </div>

    <div class="by">— By Arvind with Love ❤️</div>

    <a class="whatsapp"
      href="https://wa.me/919026217441?text=I%20said%20YES%20❤️%20Your%20Valentine%20surprise%20touched%20my%20heart"
      target="_blank">
      💬 Message Arvind on WhatsApp
    </a>
  `;

  startInfiniteHearts();
}

/* ===============================
   INFINITE FLOATING HEARTS
================================ */
function startInfiniteHearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = ["❤️", "💖", "💘", "💕", "💝"][Math.floor(Math.random() * 5)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.fontSize = 14 + Math.random() * 22 + "px";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 220);
}
