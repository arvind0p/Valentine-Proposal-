const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttons = document.getElementById("buttons");
const countdown = document.getElementById("countdown");
const card = document.getElementById("card");

/* ===============================
   NAME FROM URL (?name=Rishika)
================================ */
function getName(){
  const p = new URLSearchParams(window.location.search);
  return p.get("name") || "my love";
}

/* ===============================
   DATE-WISE VALENTINE MESSAGES
================================ */
function getValentineMessage(){
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const name = getName();

  if(month === 2){
    const messages = {
      7: `🌹 <b>Rose Day</b><br>
      Every rose I see reminds me of you, ${name} — your sweet smile,
      your gentle heart, and the beautiful way you’ve made my life
      bloom with love.`,

      8: `💍 <b>Propose Day</b><br>
      My heart chose you a long time ago, ${name}.
      And every single day, without any doubt,
      it falls for you all over again.`,

      9: `🍫 <b>Chocolate Day</b><br>
      Life feels so much sweeter with you in it, ${name}.
      Every moment with you feels like happiness
      wrapped in love and warmth.`,

      10: `🧸 <b>Teddy Day</b><br>
      You are my comfort, my safe place, ${name}.
      With you, even the simplest days
      feel soft, warm, and truly special.`,

      11: `🤞 <b>Promise Day</b><br>
      I promise to care for you, support you,
      respect you, and choose you
      with the same love — every single day, ${name}.`,

      12: `🤗 <b>Hug Day</b><br>
      I really wish I could pull you into a warm hug today, ${name},
      hold you close, and let the world disappear for a moment.`,

      13: `💋 <b>Kiss Day</b><br>
      Just one soft kiss from you, ${name},
      and my heart would melt
      into a thousand beautiful, happy feelings.`,

      14: `❤️ <b>Happy Valentine’s Day</b> ❤️<br><br>
      ${name},<br><br>
      From the moment you came into my life,
      everything felt warmer, brighter, and more meaningful.
      You became my favorite thought,
      my safest place, and my happiest feeling.<br><br>

      With you, love feels easy.
      With you, smiles feel real.
      With you, my heart feels at home.<br><br>

      Today isn’t just about Valentine’s Day —
      it’s about choosing you,
      again and again,
      today, tomorrow,
      and every day that follows.<br><br>

      My heart is yours,
      always. 💖`
    };

    return messages[day] || 
      `💖 This Valentine week keeps reminding me
       how special you are to me, ${name}.`;
  }

  return `💖 Thinking of you always, ${name}.`;
}

/* ===============================
   NO BUTTON – IMPOSSIBLE CLICK
================================ */
function moveNo(){
  const x = Math.random() * (window.innerWidth - 120);
  const y = Math.random() * (window.innerHeight - 60);
  noBtn.style.left = x + "px";
  noBtn.style.top  = y + "px";
}

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("mousemove", moveNo);
noBtn.addEventListener("touchstart", moveNo);

/* ===============================
   YES CLICK → COUNTDOWN
================================ */
yesBtn.addEventListener("click", () => {
  buttons.style.display = "none";
  countdown.classList.remove("hidden");

  const seq = ["3️⃣","2️⃣","1️⃣","GO 🚀"];
  let i = 0;

  const timer = setInterval(() => {
    document.querySelector(".count").innerText = seq[i];
    i++;
    if(i === seq.length){
      clearInterval(timer);
      finalScreen();
    }
  }, 900);
});

/* ===============================
   FINAL SCREEN
================================ */
function finalScreen(){
  card.innerHTML = `
    <div class="emoji">❤️</div>
    <h2>It’s Always You</h2>

    <div class="final-text">
      ${getValentineMessage()}
    </div>

    <div class="by">— By Arvind with Love ❤️</div>

    <a class="whatsapp"
      href="https://wa.me/919026217441?text=I%20said%20YES%20❤️%20Your%20Valentine%20surprise%20touched%20my%20heart"
      target="_blank">
      💬 Message Arvind on WhatsApp
    </a>
  `;

  startHearts();
}

/* ===============================
   INFINITE COLOURFUL HEARTS
================================ */
function startHearts(){
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.innerText = ["❤️","💖","💘","💕","💝"][Math.floor(Math.random()*5)];
    h.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 6000);
  }, 180);
}
