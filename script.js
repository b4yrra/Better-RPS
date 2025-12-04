const rock = document.getElementById("rock");
const scissor = document.getElementById("scissors");
const paper = document.getElementById("paper");
const botPoint = document.getElementById("bot");
const playerPoint = document.getElementById("player");
const buttonSec = document.getElementById("buttonSections");
const footerSec = document.getElementById("footer");
const text = document.getElementById("resultText");
const resetBtn = document.getElementById("reset");

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
    player++;
  }

  if (choice === "scissors" && computerChoice === "paper") {
    player++;
  }

  if (choice === "paper" && computerChoice === "rock") {
    player++;
  }

  if (choice === "rock" && computerChoice === "paper") {
    bot++;
  }

  if (choice === "paper" && computerChoice === "scissors") {
    bot++;
  }

  if (choice === "scissors" && computerChoice === "rock") {
    bot++;
  }

  if (choice === "rock" && computerChoice === "rock") {
    player++;
    bot++;
  }

  if (choice === "paper" && computerChoice === "paper") {
    player++;
    bot++;
  }

  if (choice === "scissors" && computerChoice === "scissors") {
    player++;
    bot++;
  }

  playerPoint.textContent = `${player}`;
  botPoint.textContent = `${bot}`;

  if (player === 3 || bot === 3) {
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
