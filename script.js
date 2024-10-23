function getRandomNumber() {
  return Math.round(Math.random() * 2 + 1);
}

function getComputerChoice() {
  switch (getRandomNumber()) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("What do you chose?  Rock, Paper or Scissors");
  return humanChoice.toLowerCase();
}

function playRound(ChoiceByHuman, choiceByComputer) {
  const humanChoice = ChoiceByHuman();
  const computerChoice = choiceByComputer();

  console.log(`Human: ${humanChoice}`);
  console.log(`Computer: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log(`It's a tie, both play ${humanChoice}`);
    return null;
  } else {
    switch (humanChoice) {
      case "rock":
        if (computerChoice === "paper") {
          console.log(
            `You lose! ${
              computerChoice.toUpperCase().charAt(0) + computerChoice.slice(1)
            } beats ${
              humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
            }`
          );
          return false;
        } else {
          console.log(
            `You Win! ${
              humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
            } beats ${
              computerChoice.toUpperCase().charAt(0) + computerChoice.slice(1)
            }`
          );
          return true;
        }
        break;
      case "paper":
        if (computerChoice === "scissors") {
          console.log(
            `You lose! ${
              computerChoice.toUpperCase().charAt(0) + computerChoice.slice(1)
            } beats ${
              humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
            }`
          );
          return false;
        } else {
          console.log(
            `You Win! ${
              humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
            } beats ${
              computerChoice.toUpperCase().charAt(0) + computerChoice.slice(1)
            }`
          );
          return true;
        }
        break;

      case "scissors":
        if (computerChoice === "rock") {
          console.log(
            `You lose! ${
              computerChoice.toUpperCase().charAt(0) + computerChoice.slice(1)
            } beats ${
              humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
            }`
          );
          return false;
        } else {
          console.log(
            `You Win! ${
              humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
            } beats ${
              computerChoice.toUpperCase().charAt(0) + computerChoice.slice(1)
            }`
          );
          return true;
        }
        break;
    }
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let result;
  while (humanScore < 5 && computerScore < 5) {
    result = playRound(getHumanChoice, getComputerChoice);
    if (result === null) {
    } else if (result === true) {
      humanScore++;
    } else {
      computerScore++;
    }

    console.log(`Human Score: ${humanScore} Computer Score:${computerScore}`);
  }
}
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

playGame();
