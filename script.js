const rock = document.getElementById("rock");
const scissor = document.getElementById("scissors");
const paper = document.getElementById("paper");
const botPoint = document.getElementById("bot");
const playerPoint = document.getElementById("player");
const buttonSec = document.getElementById("buttonSections");
const footerSec = document.getElementById("footer");
const text = document.getElementById("resultText");
const resetBtn = document.getElementById("reset");
const shownTexts = document.getElementById("shown");

let player = 0;
let bot = 0;
let tie = 0;

resetBtn.onclick = function () {
  window.location.reload();
};

const turn = (choice) => {
  const computerChoice = computerChoicer();
  console.log(choice, computerChoice);
  winnerCheck(choice, computerChoice);
};

const computerChoicer = () => {
  const ramdomChoiceIndex = Math.floor(Math.random() * 3);

  const choices = ["rock", "scissors", "paper"];

  let computerChoice = choices[ramdomChoiceIndex];

  return computerChoice;
};

const winnerCheck = (choice, computerChoice) => {
  if (choice === "rock" && computerChoice === "scissors") {
    shownTexts.textContent = "YOU WIN";
    player++;
  }

  if (choice === "scissors" && computerChoice === "paper") {
    shownTexts.textContent = "YOU WIN";
    player++;
  }

  if (choice === "paper" && computerChoice === "rock") {
    shownTexts.textContent = "YOU WIN";
    player++;
  }

  if (choice === "rock" && computerChoice === "paper") {
    shownTexts.textContent = "AI WIN";
    bot++;
  }

  if (choice === "paper" && computerChoice === "scissors") {
    shownTexts.textContent = "AI WIN";
    bot++;
  }

  if (choice === "scissors" && computerChoice === "rock") {
    shownTexts.textContent = "AI WIN";
    bot++;
  }

  if (choice === "rock" && computerChoice === "rock") {
    shownTexts.textContent = "IT'S A TIE";
  }

  if (choice === "paper" && computerChoice === "paper") {
    shownTexts.textContent = "IT'S A TIE";
  }

  if (choice === "scissors" && computerChoice === "scissors") {
    shownTexts.textContent = "IT'S A TIE";
  }

  playerPoint.textContent = `${player}`;
  botPoint.textContent = `${bot}`;

  if (player === 3 || bot === 3) {
    shownTexts.textContent = "----";
    buttonSec.style.display = "none";
    footerSec.style.display = "flex";

    if (player === bot) {
      text.textContent = "IT'S A DRAW!";
    }

    if (player > bot) {
      text.textContent = "YOU WON!";
    }

    if (player < bot) {
      text.textContent = "YOU LOST!";
    }
  }
};
