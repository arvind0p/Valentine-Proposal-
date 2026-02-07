const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const buttons = document.getElementById("buttons");
const overlay = document.getElementById("overlay");
const countText = document.getElementById("countText");
const card = document.getElementById("card");

/* name from URL */
function getName(){
  const p=new URLSearchParams(window.location.search);
  return p.get("name") || "my love";
}

/* date-wise message */
function getValentineMessage(){
  const d=new Date();
  const day=d.getDate();
  const m=d.getMonth()+1;
  const name=getName();

  if(m===2){
    const msg={
      7:`🌹 Rose Day — Every rose I see reminds me of you, ${name}, and the way you’ve made my heart bloom with love.`,
      8:`💍 Propose Day — My heart chose you long ago, ${name}, and it still chooses you every single day.`,
      9:`🍫 Chocolate Day — Life feels sweeter with you in it, ${name}, like happiness wrapped in love.`,
      10:`🧸 Teddy Day — You are my comfort, my safe place, ${name}, and my peace.`,
      11:`🤞 Promise Day — I promise to care for you, support you, and choose you every day, ${name}.`,
      12:`🤗 Hug Day — I wish I could hold you in a warm hug today, ${name}, just a little longer.`,
      13:`💋 Kiss Day — One soft kiss from you, ${name}, and my heart melts into happiness.`,
      14:`❤️ Happy Valentine’s Day ❤️<br><br>
          ${name}, from the moment you came into my life,
          everything felt brighter and warmer.
          My heart chooses you — today, tomorrow,
          and always. 💖`
    };
    return msg[day]||`💖 Thinking of you always, ${name}.`;
  }
  return `💖 Thinking of you always, ${name}.`;
}

/* NO button impossible */
function moveNo(){
  noBtn.style.position="fixed";
  noBtn.style.left=Math.random()*(window.innerWidth-140)+"px";
  noBtn.style.top=Math.random()*(window.innerHeight-60)+"px";
}
noBtn.addEventListener("mouseenter",moveNo);
noBtn.addEventListener("mousemove",moveNo);
noBtn.addEventListener("touchstart",moveNo);

/* YES click */
yesBtn.addEventListener("click",()=>{
  buttons.style.display="none";
  overlay.classList.remove("hidden");

  startFireworks();

  const seq=["3 ❤️","2 ❤️","1 ❤️","GO 🚀"];
  let i=0;

  const timer=setInterval(()=>{
    countText.innerText=seq[i];
    i++;
    if(i===seq.length){
      clearInterval(timer);
      overlay.classList.add("hidden");
      finalScreen();
    }
  },800);
});

/* fireworks for 3 sec */
function startFireworks(){
  const t=setInterval(()=>{
    const f=document.createElement("div");
    f.className="fire";
    f.innerText=["🎆","🎇","✨"][Math.floor(Math.random()*3)];
    f.style.left=Math.random()*100+"vw";
    f.style.top=Math.random()*100+"vh";
    document.body.appendChild(f);
    setTimeout(()=>f.remove(),1200);
  },150);
  setTimeout(()=>clearInterval(t),3000);
}

/* final page */
function finalScreen(){
  card.innerHTML=`
    <div class="emoji">❤️</div>
    <h2>It’s Always You</h2>

    <div class="final-text">
      ${getValentineMessage()}
    </div>

    <div class="by">— By Arvind with Love ❤️</div>

    <a class="whatsapp"
      href="https://wa.me/919026217441?text=I%20said%20YES%20❤️%20Your%20Valentine%20surprise%20was%20beautiful"
      target="_blank">
      💬 Message Arvind on WhatsApp
    </a>
  `;
  startHearts();
}

/* infinite hearts */
function startHearts(){
  setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.innerText=["❤️","💖","💘","💕","💝"][Math.floor(Math.random()*5)];
    h.style.left=Math.random()*100+"vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6000);
  },180);
}
