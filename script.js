const title = document.getElementById("title");
const body = document.body;
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttons = document.querySelector(".buttons");
const countdownBox = document.getElementById("countdown");
const countText = document.getElementById("countText");
const container = document.querySelector(".container");

/* 💘 Valentine week auto theme */
(function(){
  const d=new Date(),day=d.getDate(),m=d.getMonth()+1;
  const t={
    7:["🌹 Rose Day — Every rose reminds me of you","#7b001c"],
    8:["💍 Propose Day — Will you be mine?","#3a003a"],
    9:["🍫 Chocolate Day — Life feels sweeter with you","#3b1f0f"],
    10:["🧸 Teddy Day — You are my comfort","#4b2c2c"],
    11:["🤞 Promise Day — I promise you my heart","#002b3b"],
    12:["🤗 Hug Day — Wish I could hug you today","#4d0033"],
    13:["💋 Kiss Day — One kiss, a thousand feelings","#5a001a"],
    14:["❤️ Happy Valentine’s Day, my love ❤️","#b30059"]
  };
  if(m===2 && t[day]){
    title.innerText=t[day][0];
    body.style.background=`radial-gradient(circle,${t[day][1]},#000)`;
  }else{
    title.innerText="💖 You mean more to me than words can say";
  }
})();

/* 😈 NO button – same size, only moves */
function moveNo(){
  const maxX = buttons.offsetWidth - noBtn.offsetWidth;
  const maxY = buttons.offsetHeight - noBtn.offsetHeight;
  noBtn.style.left = Math.random()*maxX + "px";
  noBtn.style.top  = Math.random()*maxY + "px";
}
noBtn.addEventListener("mouseenter",moveNo);
noBtn.addEventListener("touchstart",moveNo);

/* 💖 YES click → countdown */
yesBtn.addEventListener("click",()=>{
  buttons.style.display="none";
  countdownBox.classList.remove("hidden");
  let c=3;
  countText.innerText=c;
  const t=setInterval(()=>{
    c--;
    if(c>0){countText.innerText=c}
    else{clearInterval(t);finalScreen()}
  },1000);
});

/* 💌 Final screen + WhatsApp */
function finalScreen(){
  container.innerHTML=`
    <h1>❤️ It’s Always You ❤️</h1>
    <p style="margin-top:20px;line-height:1.8">
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

/* ❤️ hearts */
function startHearts(){
  setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤️";
    h.style.left=Math.random()*100+"vw";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6000);
  },200);
}
