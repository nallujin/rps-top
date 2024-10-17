let humanScore = 0;
let computerScore = 0;



playGame();

//////////////////////////////////////////////////  Functions  /////////////////////////////////////////////////////

function playGame() {
    let scoreLimit = false;
    while (scoreLimit === false) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`${humanScore} ${computerScore}`);
        if (humanScore === 5 || computerScore === 5) {
            scoreLimit = true;
        }
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tied!")
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            // Player is Rock, Computer is Scissors
            console.log("You Win! Rock beats Scissors!");
            humanScore++;
        } else if (computerChoice === "paper") {
            // Player is Rock, Computer is Paper
            console.log("You Lose! Paper beats Paper!");
            computerScore++;
        }
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            // Player is Paper, Computer is Rock
            console.log("You Win! Paper beats Rock!");
            humanScore++;
        } else if (computerChoice === "scissors") {
            // Player is Paper, Computer is Scissors
            console.log("You Lose! Scissors beats Paper!");
            computerScore++;
        }
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            // Player is Scissors, Computer is Paper
            console.log("You Win! Scissors beats Paper!");
            humanScore++;
        } else if (computerChoice === "rock") {
            // Player is Scissors, Computer is Rock
            console.log("You Lose! Rock beats Scissors!");
            computerScore++;
        }
    }
}

function getComputerChoice() {
    const numValue = Math.floor(Math.random() * 3) + 1;
    switch (numValue) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

function getHumanChoice() {
    const userChoice = prompt("rock / paper / scissors").toLowerCase();
    switch (userChoice) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
    }
}
