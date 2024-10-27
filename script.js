const MAXGAME = 5;
let humanScore = 0;
let computerScore = 0;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const buttons = [rock, paper, scissors];

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        switch (i) {
            case 0:
                playGame("Rock");
                break;
            case 1:
                playGame("Paper");
                break;
            case 2:
                playGame("Scissors");
                break;
        }
    });
}

function playGame(playerHand) {
    const computerHand = getComputerChoice();
    playRound(playerHand, computerHand);
    checkScore();
}

function playRound(humanChoice, computerChoice) {
    const announcement = document.querySelector(".announcement");
    const result = document.querySelector(".result");

    if (humanChoice === computerChoice) {
        // console.log("Tied!")
        announcement.textContent = "Tied!";
        result.textContent = `You: ${humanChoice}; Computer: ${computerChoice}`;
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            // Player is Rock, Computer is Scissors
            humanScore++;
            announcement.textContent = "You Win!";
            result.textContent = `You: ${humanChoice}; Computer: ${computerChoice}`;
        } else if (computerChoice === "Paper") {
            // Player is Rock, Computer is Paper
            computerScore++;
            announcement.textContent = "You Lose!";
            result.textContent = `You: ${humanChoice}; Computer: ${computerChoice}`;
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            // Player is Paper, Computer is Rock
            humanScore++;
            announcement.textContent = "You Win!";
            result.textContent = `You: ${humanChoice}; Computer: ${computerChoice}`;
        } else if (computerChoice === "Scissors") {
            // Player is Paper, Computer is Scissors
            computerScore++;
            announcement.textContent = "You Lose!";
            result.textContent = `You: ${humanChoice}; Computer: ${computerChoice}`;
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            // Player is Scissors, Computer is Paper
            humanScore++;
            announcement.textContent = "You Win!";
            result.textContent = `You: ${humanChoice}; Computer: ${computerChoice}`;
        } else if (computerChoice === "Rock") {
            // Player is Scissors, Computer is Rock
            computerScore++;
            announcement.textContent = "You Lose!";
            result.textContent = `You: ${humanChoice}; Computer: ${computerChoice}`;
        }
    }
    displayScore();
}

function getComputerChoice() {
    const numValue = Math.floor(Math.random() * 3) + 1;
    switch (numValue) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function displayScore() {
    const score = document.querySelector(".scores");
    score.textContent = `You: ${humanScore} - Computer ${computerScore}`;
}

function checkScore() {
    const finalDialog = document.querySelector(".dialog");
    const verdict = document.querySelector("#verdict");
    if (humanScore === MAXGAME || computerScore === MAXGAME) {
        finalDialog.textContent = "Refresh this page to restart the game.";
        buttons.forEach((button) => {
            button.disabled = true;
            button.style.cursor = "not-allowed";
        });

        if (humanScore > computerScore) {
            verdict.textContent = "You Won!";
        } else {
            verdict.textContent = "You Lost!";
        }

    }
}
