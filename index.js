// const randomBtn = document.getElementById("random-btn");
// randomBtn.addEventListener("click", () => {
//   let random = Math.floor(Math.random() * 11) + 1;
//   if (random <= 5) {
//     displayScore1.value += random;
//     displayScore1.textContent = evaluateHome();
//   } else if (random <= 10 && random >= 6) {
//     displayScore2.value += random;
//     displayScore2.textContent = evaluateGuest();
//   }
// });

const homeBoard = document.getElementById("home-board");
homeBoard.innerHTML = `
<h1>HOME</h1>
<span id = 'display-score-1' value = ' '>0</span>
<div id = 'btn-div'>
    <input type="button" value="+1" id = 'home-btn'>
    <input type="button" value="+2" id = 'home-btn'>
    <input type="button" value="+3" id = 'home-btn'>
</div>

`;
const displayScore1 = document.getElementById("display-score-1");
const homeBtn = document.querySelectorAll("#home-btn");

displayScore1.textContent = "";
displayScore1.value = 0;

homeBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayScore1.value += btn.value;
    displayScore1.textContent = evaluateHome();
  });
});

const guestBoard = document.getElementById("guest-board");
guestBoard.innerHTML = `
<h1>GUEST</h1>
<span id = 'display-score-2' value = ' '>0</span>
<div id = 'btn-div'>
    <input type="button" value="+1" id = 'guest-btn'>
    <input type="button" value="+2" id = 'guest-btn'>
    <input type="button" value="+3" id = 'guest-btn'>
</div>
`;

const displayScore2 = document.getElementById("display-score-2");
const inputBtn = document.querySelectorAll("#guest-btn");

displayScore2.textContent = "";
displayScore2.value = " 0";

inputBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayScore2.value += btn.value;
    displayScore2.textContent = evaluateGuest();
  });
});

let sum = 0;
function evaluateGuest() {
  sum = eval(displayScore2.value);
  return sum;
}

function evaluateHome() {
  sum = eval(displayScore1.value);
  return sum;
}
