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
================================ */
function getFinalMessage() {
  const d = new Date();
  const day = d.getDate();
  const m = d.getMonth() + 1;
  const name = getName();

  if (m === 2) {
    const messages = {
      7: `🌹 Rose Day — Every rose I see reminds me of you, ${name}, and the gentle way you’ve made my heart bloom with love.`,
      8: `💍 Propose Day — My heart chose you a long time ago, ${name}, and it still chooses you every single day.`,
      9: `🍫 Chocolate Day — Life feels sweeter with you in it, ${name}, like happiness wrapped in love.`,
      10: `🧸 Teddy Day — You are my comfort, my safe place, ${name}, and my peace.`,
      11: `🤞 Promise Day — I promise to care for you, support you, and choose you every single day, ${name}.`,
      12: `🤗 Hug Day — I wish I could pull you into a warm hug today, ${name}, and never let go.`,
      13: `💋 Kiss Day — One soft kiss from you, ${name}, and my heart melts into a thousand happy feelings.`,
      14: `❤️ Happy Valentine’s Day ❤️<br><br>
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
   NO BUTTON — RUNAWAY
================================ */
function moveNo() {
  noBtn.style.position = "fixed";
  const x = Math.random() * (window.innerWidth - 140);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
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
      heartBlast(); // blast hearts on 1
    }

    i++;
    if (i === seq.length) {
      clearInterval(timer);
      setTimeout(() => {
        overlay.classList.add("hidden");
        finalScreen();
      }, 3000); // wait for blast
    }
  }, 900);
});

/* ===============================
   HEART BLAST (3 seconds)
================================ */
function heartBlast() {
  const blast = setInterval(() => {
    for (let i = 0; i < 12; i++) {
      const h = document.createElement("div");
      h.className = "heart";
      h.innerText = ["❤️", "💖", "💘", "💕", "💝"][Math.floor(Math.random() * 5)];
      h.style.left = "50vw";
      h.style.top = "50vh";
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 6000);
    }
  }, 150);

  setTimeout(() => clearInterval(blast), 3000);
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
   INFINITE HEARTS (FINAL PAGE)
================================ */
function startInfiniteHearts() {
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = ["❤️", "💖", "💘", "💕", "💝"][Math.floor(Math.random() * 5)];
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 200);
}
