const gameContainer = document.querySelector(".game-container");
const playerChoiceContainer = document.querySelector(
  ".player-choice__container"
);
const computerPlay = document.querySelector(".computer-play");
const result = document.querySelector(".result");
const score = document.querySelector(".score");
const announcement = document.querySelector(".announcement");

let buttons = document.querySelectorAll("button");
let restartButton = document.createElement("button");
restartButton.textContent = "Restart Game";

let playerScore = 0;
let computerScore = 0;

function getRandomInt() {
  return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

function getComputerChoice() {
  switch (getRandomInt()) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
}

playerChoiceContainer.addEventListener("click", (event) => {
  let playerSelection = "";
  switch (event.target.className) {
    case "rock":
      playerSelection = "Rock";
      break;
    case "scissors":
      playerSelection = "Scissors";
      break;

    case "paper":
      playerSelection = "Paper";
      break;
    default:
      return null;
  }
  playRound(playerSelection, getComputerChoice());
});

function playRound(playerSelection, computerSelection) {
  computerPlay.textContent = "Computer play: " + computerSelection;

  if (playerSelection === computerSelection) {
    result.textContent = "It's a tie! Lets play again";
    game(null);
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    game(false);
  } else {
    result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    game(true);
  }
}

function game(roundResult) {
  if (roundResult === true) {
    playerScore++;
  } else if (roundResult === false) {
    computerScore++;
  } else {
    null;
  }
  score.textContent = `Player Score: ${playerScore} || Computer Score: ${computerScore}`;
  if (playerScore === 5 || computerScore === 5) {
    endGame(playerScore);
  }
}

function endGame(playerScore) {
  playerScore === 5
    ? (announcement.textContent = "You Win The Game! Nice Job")
    : (announcement.textContent =
        "You lose the game, Computer Win, Lets try again!");
  buttons.forEach((button) => {
    button.setAttribute("disabled", "true");
  });
  gameContainer.append(restartButton);
  restartButton.addEventListener("click", restartGame);
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;
  score.textContent = `Player Score: ${playerScore} || Computer Score: ${computerScore}`;
  result.textContent = "";
  computerPlay.textContent = "";
  announcement.textContent = "";
  restartButton.remove();
  buttons.forEach((button) => {
    button.removeAttribute("disabled", "true");
  });
}
