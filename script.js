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
