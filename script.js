function cl(typeInConsole) {
  console.log(typeInConsole);
}

// - Create getComputerChoice function;
function getComputerChoice() {
  // - The getComputerChoice function will randomly choose between the three values: "rock", "paper", "scissors";
  // ||getComputerChoise {
  // - Create a random number generator using Math.random multiplied by 3 so it has three random values;
  let randomNumber = Math.floor(Math.random() * 3 + 1);
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
