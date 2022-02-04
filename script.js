let scorePlayer = 0;
let scoreComputer = 0;
let gameContainer = document.querySelector(".game-container");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let btn = document.querySelectorAll(".btn");
let result = document.querySelector(".result");
let score = document.querySelector(".score");
let announcement = document.querySelector(".announcement");
let restartBtn = document.createElement("button");

function computerPlay() {
  let num = Math.floor(Math.random() * 3) + 1;
  if (num == 1) {
    return "rock";
  } else if (num == 2) {
    return "paper";
  } else if (num == 3) {
    return "scissors";
  }
}

// playerPlay
rock.addEventListener("click", () => {
  playRound("rock", computerPlay());
});
paper.addEventListener("click", () => {
  playRound("paper", computerPlay());
});
scissors.addEventListener("click", () => {
  playRound("scissors", computerPlay());
});

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    result.textContent = `It was a tie with ${playerSelection}`;
    score.textContent = `SCORE || Computer: ${scoreComputer}, Player: ${scorePlayer}`;
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      scoreComputer++;
      result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      score.textContent = `SCORE || Computer: ${scoreComputer}, Player: ${scorePlayer}`;
    } else {
      scorePlayer++;
      result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      score.textContent = `SCORE || Computer: ${scoreComputer}, Player: ${scorePlayer}`;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      scoreComputer++;
      result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      score.textContent = `SCORE || Computer: ${scoreComputer}, Player: ${scorePlayer}`;
    } else {
      scorePlayer++;
      result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      score.textContent = `SCORE || Computer: ${scoreComputer}, Player: ${scorePlayer}`;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      scoreComputer++;
      result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      score.textContent = `SCORE || Computer: ${scoreComputer}, Player: ${scorePlayer}`;
    } else {
      scorePlayer++;
      result.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      score.textContent = `SCORE || Computer: ${scoreComputer}, Player: ${scorePlayer}`;
    }
  }
  if (scoreComputer == 5 || scorePlayer == 5) {
    game();
  }
}

function game() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].disabled = true;
  }
  if (scoreComputer == 5) {
    announcement.textContent = `You lose the game, Computer Win`;
  } else if (scorePlayer == 5) {
    announcement.textContent = `You Win the game, Congratulations!`;
  }
  restartBtn.classList.add("restartbtn");
  restartBtn.textContent = "Restart Game";
  gameContainer.appendChild(restartBtn);
  restartBtn.addEventListener("click", restartGame);
}

function restartGame() {
  for (let i = 0; i < btn.length; i++) {
    btn[i].disabled = false;
  }
  scorePlayer = 0;
  scoreComputer = 0;
  gameContainer.removeChild(restartBtn);
  score.textContent = ``;
  result.textContent = ``;
  announcement.textContent = ``;
}
