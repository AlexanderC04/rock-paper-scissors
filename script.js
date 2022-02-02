let scorePlayer = 0;
let scoreComputer = 0;

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

function playerPlay() {
  let playerSelection;
  do {
    playerSelection = prompt("Chose Rock, Paper or Scissors");
  } while (
    playerSelection != "rock" &&
    playerSelection != "paper" &&
    playerSelection != "scissors"
  );
  return playerSelection;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return `It was a tie with ${playerSelection}`;
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      scoreComputer++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      scorePlayer++;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "scissors") {
      scoreComputer++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      scorePlayer++;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      scoreComputer++;
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      scorePlayer++;
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
  }
}

function game() {
  while (scorePlayer < 3 && scoreComputer < 3) {
    console.log(playRound(playerPlay(), computerPlay()));
    console.log(`SCORE || Computer: ${scoreComputer}, Player: ${scorePlayer}`);
  }
  if (scoreComputer == 3) {
    console.log("You lose the game, Computer Win");
  } else if (scorePlayer == 3) {
    console.log("You Win the game, Congratulations!");
  }
}

function buttonPlay() {
  scorePlayer = 0;
  scoreComputer = 0;
  console.clear();
  console.log("Stars the game Man vs Machine");
  game();
}
