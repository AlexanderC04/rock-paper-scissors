//  Rock Paper Scissors

//  Get random between 1 and  3
function getRandomInt() {
  return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

// Use the number from getRandomInt() to chose the computer choice for the round

function getComputerChoice() {
  switch (getRandomInt()) {
    case 1:
      console.log("Computer: Rock");
      return "Rock";
    case 2:
      console.log("Computer: Paper");
      return "Paper";
    case 3:
      console.log("Computer: Scissors");
      return "Scissors";
  }
}

// Get the player choice and make sure that was well type

function getPlayerChoice() {
  let playerInput;
  let playerChoice;

  let validValue = false;
  do {
    playerInput = prompt("Chose: Rock | Paper | Scissors");
    playerChoice = playerInput.toLowerCase();
    if (playerChoice === "rock") {
      playerChoice = "Rock";
      console.log(`Player: ${playerChoice}`);
      validValue = true;
    } else if (playerChoice === "paper") {
      playerChoice = "Paper";
      console.log(`Player: ${playerChoice}`);
      validValue = true;
    } else if (playerChoice === "scissors") {
      playerChoice = "Scissors";
      console.log(`Player: ${playerChoice}`);
      validValue = true;
    } else {
      alert("No a Right choice");
    }
  } while (validValue === false);
  return playerChoice;
}

// compere the player selection and the computer chose and decide a winner for the round
// return the True if the player win, false if the computer won and null if was a tie.

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie! Lets play again");
    return null;
  } else if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return false;
  } else {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return true;
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;
  do {
    let result = playRound(getPlayerChoice(), getComputerChoice());
    if (result === true) {
      playerScore++;
    } else if (result === false) {
      computerScore++;
    } else {
      null;
    }
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  } while (playerScore != 5 && computerScore != 5);

  if (playerScore === 5) {
    console.log("You Win The Game!");
  } else {
    console.log("You Lose The Game!");
  }
}

game();
