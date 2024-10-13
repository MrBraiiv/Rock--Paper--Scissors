const buttons = document.querySelector(".buttons");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

buttons.addEventListener("click", playRound);

let computerScore = 0;
let humanScore = 0;

function playRound(event, computerChoice, humanChoice) {
  const humanPara = document.querySelector(".humanPara");
  const computerPara = document.querySelector(".computerPara");
  const winnerPara = document.querySelector(".winnerPara");

  const scoresPara = document.querySelector(".scoresPara");

  const gameWinner = document.querySelector(".gameWinner");

  humanPara.textContent = "";
  computerPara.textContent = "";
  winnerPara.textContent = "";
  scoresPara.textContent = "";
  gameWinner.textContent = "";

  computerChoice = getComputerChoice();
  humanChoice = `${event.target.id}`;
  event.stopPropagation();

  humanPara.textContent = `Human chooses: ${humanChoice}`;
  computerPara.textContent = `Computer chooses: ${computerChoice}`;

  if (computerChoice === humanChoice) {
    winnerPara.textContent = `NO ONE WINS!`;
  } else {
    if (computerChoice === "rock" && humanChoice === "paper") {
      humanScore++;
      winnerPara.textContent = `HUMAN WINS!`;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
      humanScore++;
      winnerPara.textContent = `HUMAN WINS!`;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
      humanScore++;
      winnerPara.textContent = `HUMAN WINS!`;
    } else {
      computerScore++;
      winnerPara.textContent = `COMPUER WINS!`;
    }
  }

  scoresPara.textContent = `Human:${humanScore} \n Computer:${computerScore}`;

  if (computerScore === 5 || humanScore === 5) {
    let wins =
      computerScore > humanScore
        ? `COMPUTER IS THE WINNER!`
        : `HUMAN IS THE WINNER!`;
    computerScore = 0;
    humanScore = 0;

    gameWinner.textContent = wins;
  }
}

//Functions section:

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  switch (randomNumber) {
    case 1:
      return "rock";
      break;
    case 2:
      return "paper";
      break;
    case 3:
      return "scissors";
      break;
    default:
      return "rock";
  }
}
