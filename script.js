function cl(typeInConsole) {
  console.log(typeInConsole);
}

// - Create getComputerChoice function;
function getComputerChoice() {
  // - The getComputerChoice function will randomly choose between the three values: "rock", "paper", "scissors";
  // ||getComputerChoise {
  // - Create a random number generator using Math.random multiplied by 3 so it has three random values;
  const randomNumber = Math.floor(Math.random() * 3 + 1);
  // - Create an switch that has three cases: case 1 = "rock", case 2 = "paper" case 3 = "scissors";
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

// - Create getHumanChoice function *this function will take the user's choice*;
function getHumanChoice() {
  // || getHumanChoice {
  // - Create a choice variable that takes the user's input;
  let choice = prompt("rock, paper or scissors??");
  // - Create a switch that returnes the choosen, and transform the choice to lowercase during that;
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
      return "maybe you misstyped, choose rock, paper or scissors.";
  }
  // }
}

//- Create two variables: computerScore and humanScore, that takes the score, and initialy their value is set to zero;
let computerScore = 0;
let humanScore = 0;

// - Create a playGround function that has two parameters: computerChoice and humanChoice;
function playGround(computerChoice, humanChoice) {
  // ||playGround(computerChoice, humanChoice) {
  // - Move the code inside;
  // Create the two variables computerChoice and humanChoice and put the choices inside of them so that the function doesn't miss use arguments;

  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();

  // - Create an if statement that if the computer and human has the same choice will return "object equals object, no one wins!", else create an if inside the else that if compuerChoice = "rock" and getHumanChoice = "paper", increase the human score and return "paper beats rock! HUMAN WINS" and continue with the game irony.
  if (computerChoice === humanChoice) {
    return `Human chooses: ${humanChoice}
    Computer chooses: ${computerChoice}
    ${computerChoice} equals ${humanChoice}, no one wins
    Score:
  Human:${humanScore}
  Computer:${computerScore}`.replaceAll("\n", "");
  } else {
    if (computerChoice === "rock" && humanChoice === "paper") {
      humanScore++;
      return `Human chooses: ${humanChoice}
      Computer chooses: ${computerChoice}
      ${humanChoice} beats ${computerChoice}! human wins!
      Score:
  Human:${humanScore}
  Computer:${computerScore}`.replaceAll("\n", "");
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
      humanScore++;
      return `Human chooses: ${humanChoice}
      Computer chooses: ${computerChoice}
      ${humanChoice} beats ${computerChoice}! human wins!
      Score:
  Human:${humanScore}
  Computer:${computerScore}`.replaceAll("\n", "");
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
      humanScore++;
      return `Human chooses: ${humanChoice}
      Computer chooses: ${computerChoice}
      ${humanChoice} beats ${computerChoice}! human wins!
      Score:
  Human:${humanScore}
  Computer:${computerScore}`.replaceAll("\n", "");
    } else {
      computerScore++;
      return `Human chooses: ${humanChoice}
      Computer chooses: ${computerChoice}
      ${computerChoice} beats ${humanChoice}! computer wins!
      Score:
  Human:${humanScore}
  Computer:${computerScore}`.replaceAll("\n", "");
    }
  }
  // }
}
