function getRandomNumber() {
  return Math.trunc(Math.random() * (4 - 1) + 1);
}

function getComputerChoice() {
  const randomNumber = getRandomNumber();
  let computerChoice;
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function getHumanChoice() {
  return prompt("Enter your choice: Rock, Paper, Scissors").toLowerCase();
}

function displayScore(computerScore, humanScore) {
  console.log("Computer: " + computerScore + " | Human: " + humanScore);
}

function displayWinner(winner) {
  if (winner == "human") console.log("Congratulations! You beat the computer.");
  else console.log("Game over! The computer won.");
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function updateScore(roundWinner) {
    if (roundWinner === "human") {
      humanScore++;
      displayScore(computerScore, humanScore);
    } else {
      computerScore++;
      displayScore(computerScore, humanScore);
    }
  }

  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("*----------------------------*");
    console.log("Computer: " + computerChoice);
    console.log("Human: " + humanChoice);

    if (humanChoice === computerChoice) {
      console.log(
        `It's a tie, both play ${
          humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
        }`
      );
      displayScore(computerScore, humanScore);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "scissors" && computerChoice === "paper") ||
      (humanChoice === "paper" && computerChoice === "rock")
    ) {
      console.log(
        `You Win! ${
          humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
        } beats ${
          computerChoice.toUpperCase().charAt(0) + computerChoice.slice(1)
        }`
      );
      updateScore("human");
    } else {
      console.log(
        `You lose! ${
          computerChoice.toUpperCase().charAt(0) + computerChoice.slice(1)
        } beats ${humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)}`
      );
      updateScore("computer");
    }
  }

  while (humanScore < 5 && computerScore < 5) {
    playRound();
  }

  if (humanScore == 5 || computerScore == 5) {
    displayWinner(humanScore == 5 ? "human" : "computer");
  }
}

playGame();
