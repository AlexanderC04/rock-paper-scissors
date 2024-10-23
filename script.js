document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", playRound);
});

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

function playRound(event) {
  const choices = document.querySelector(".choices");
  const result = document.querySelector(".result");

  const humanChoice = event.target.id;
  const computerChoice = getComputerChoice();

  choices.textContent = `Human: ${
    humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
  } | Computer: ${
    computerChoice.toUpperCase().charAt(0) + computerChoice.slice(1)
  }`;

  if (humanChoice === computerChoice) {
    result.textContent = `It's a tie, both play ${
      humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
    }`;

    showScore(null);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    result.textContent = `You Win! ${
      humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)
    } beats ${
      computerChoice.toUpperCase().charAt(0) + computerChoice.slice(1)
    }`;
    showScore(true);
  } else {
    result.textContent = `You lose! ${
      computerChoice.toUpperCase().charAt(0) + computerChoice.slice(1)
    } beats ${humanChoice.toUpperCase().charAt(0) + humanChoice.slice(1)}`;
    showScore(false);
  }
}

function showScore(result) {
  let humanScore = document.querySelector("#human-score");
  let computerScore = document.querySelector("#computer-score");

  let humanScoreValue = humanScore.textContent;
  let computerScoreValue = computerScore.textContent;

  if (result === null) {
  } else if (result === true) {
    humanScoreValue++;
  } else {
    computerScoreValue++;
  }
  computerScore.textContent = computerScoreValue;
  humanScore.textContent = humanScoreValue;
  if (humanScoreValue >= 5 || computerScoreValue >= 5) {
    document.querySelectorAll(".btn").forEach((btn) => {
      btn.disabled = true;
    });

    const container = document.querySelector(".container");
    const winnerAnnouncement = document.createElement("div");
    const message = document.createElement("h3");
    const newGame = document.createElement("button");

    winnerAnnouncement.appendChild(message);
    winnerAnnouncement.appendChild(newGame);

    message.textContent =
      humanScoreValue == 5
        ? "YOU WON, CONGRATULATIONS"
        : "YOU LOSE, LETS TRY AGAIN";
    newGame.textContent = "New Game";
    container.appendChild(winnerAnnouncement);

    newGame.addEventListener("click", () => {
      winnerAnnouncement.remove();
      computerScore.textContent = 0;
      humanScore.textContent = 0;
      document.querySelectorAll(".btn").forEach((btn) => {
        btn.disabled = false;
        const choices = document.querySelector(".choices");
        const result = document.querySelector(".result");
        choices.textContent = "";
        result.textContent = "";
      });
    });
  }
}
