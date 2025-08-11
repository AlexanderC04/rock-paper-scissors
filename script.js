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

function showWinner(winner) {
  if (winner == "human") console.log("Congratulations! You beat the computer.");
  else console.log("Game over! the computer won.");
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log("Computer: " + computerChoice);
    console.log("Human: " + humanChoice);

    if (humanChoice === computerChoice) {
      console.log(
        `It's a tie, both play ${
          humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
        }`
      );
      showScore();
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
      updateScore();
    }
  }
  function updateScore(roundWinner = "") {
    if (roundWinner === "human") {
      humanScore++;
      showScore();
    } else {
      computerScore++;
      showScore();
    }
  }
  function showScore() {
    console.log("Computer: " + computerScore + " | Human: " + humanScore);
  }
  while (humanScore < 5 && computerScore < 5) {
    playRound();
  }

  if (humanScore == 5 || computerScore == 5) {
    showWinner(humanScore == 5 ? "human" : "computer");
  }
}
playGame();
