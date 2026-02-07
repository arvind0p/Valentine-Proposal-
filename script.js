const card = document.getElementById("card");
const showBtn = document.getElementById("showBtn");

/* get name from URL */
function getName(){
  const p = new URLSearchParams(window.location.search);
  return p.get("name") || "my love";
}

/* Valentine week message */
function getValentineMessage(){
  const d = new Date();
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const name = getName();

  if(month === 2){
    const messages = {
      7: `🌹 Rose Day — Every rose I see reminds me of you, ${name}, and the gentle way you’ve made my heart bloom with love.`,
      8: `💍 Propose Day — My heart chose you long ago, ${name}, and every single day it falls for you all over again.`,
      9: `🍫 Chocolate Day — Life feels sweeter with you in it, ${name}, like every moment is wrapped in happiness.`,
      10:`🧸 Teddy Day — You are my comfort, my safe place, ${name}, and the reason simple days feel special.`,
      11:`🤞 Promise Day — I promise to care for you, support you, and choose you with the same love every day, ${name}.`,
      12:`🤗 Hug Day — I wish I could pull you into a warm hug today, ${name}, and hold you just a little longer.`,
      13:`💋 Kiss Day — One soft kiss from you, ${name}, and my heart would melt into a thousand happy feelings.`,
      14:`❤️ Happy Valentine’s Day, ${name} ❤️<br><br>
          From the moment you came into my life, everything felt warmer and more meaningful.
          My heart chooses you — today and always.`
    };

    return messages[day] || `💖 This Valentine week reminds me how special you are, ${name}.`;
  }

  return `💖 Thinking of you always, ${name}.`;
}

/* SHOW BUTTON — GUARANTEED WORKING */
showBtn.addEventListener("click", () => {
  card.innerHTML = `
    <div class="emoji">❤️</div>

    <div class="surprise">
      ${getValentineMessage()}
    </div>

    <div class="by">
      — By Arvind with Love ❤️
    </div>
  `;
});
