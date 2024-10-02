function cl(typeInConsole) {
  console.log(typeInConsole);
}

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
  // }
}

function getHumanChoice() {
  let choice = prompt("rock, paper or scissors??");
  switch (choice.toLowerCase()) {
    case "rock":
      return "rock";
      break;
    case "paper":
      return "paper";
      break;
    case "scissors":
      return "scissors";
      break;
    default:
      return "maybe you misstyped, choose rock";
  }
}

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  function playRound(computerChoice, humanChoice) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();

    if (computerChoice === humanChoice) {
      return `Human chooses: ${humanChoice}
    Computer chooses: ${computerChoice}
    ${computerChoice} equals ${humanChoice}, NO ONE WINS!
    Score:
  Human:${humanScore}
  Computer:${computerScore}`.replaceAll("\n", "");
    } else {
      if (computerChoice === "rock" && humanChoice === "paper") {
        humanScore++;
        return `Human chooses: ${humanChoice}
      Computer chooses: ${computerChoice}
      ${humanChoice} beats ${computerChoice}! HUMAN WINS!
      Score:
  Human:${humanScore}
  Computer:${computerScore}`.replaceAll("\n", "");
      } else if (computerChoice === "paper" && humanChoice === "scissors") {
        humanScore++;
        return `Human chooses: ${humanChoice}
      Computer chooses: ${computerChoice}
      ${humanChoice} beats ${computerChoice}! HUMAN WINS!
      Score:
  Human:${humanScore}
  Computer:${computerScore}`.replaceAll("\n", "");
      } else if (computerChoice === "scissors" && humanChoice === "rock") {
        humanScore++;
        return `Human chooses: ${humanChoice}
      Computer chooses: ${computerChoice}
      ${humanChoice} beats ${computerChoice}! HUMAN WINS!
      Score:
  Human:${humanScore}
  Computer:${computerScore}`.replaceAll("\n", "");
      } else {
        computerScore++;
        return `Human chooses: ${humanChoice}
      Computer chooses: ${computerChoice}
      ${computerChoice} beats ${humanChoice}! COMPUTER WINS!
      Score:
  Human:${humanScore}
  Computer:${computerScore}`.replaceAll("\n", "");
      }
    }
  }
  for (let i = 0; i < 5; i++) {
    cl(playRound());
  }

  if (humanScore === computerScore) {
    return "NO ONE WINS THE GAME!";
  } else if (humanScore >= computerScore) {
    return "HUMAN WINS THE GAME!!";
  } else {
    return "COMPUTER WINS THE GAME!";
  }
}
