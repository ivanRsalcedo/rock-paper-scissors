let humanScore = 0, computerScore = 0;

playGame();

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    console.log(humanScore === computerScore ? "After all, it's a tie." :
        humanScore > computerScore ? "Human wins the game!" :
        "Computer wins the game!");
    console.log(`Scores: ${humanScore}:${computerScore}`);
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)
        console.log(`It's a tie!`);
    else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log(`You lose! \n${computerChoice} beats ${humanChoice}.\n Human Score: ${humanScore}\n Computer Score: ${++computerScore}`);
    }

    else
        console.log(`You win! \n${humanChoice} beats ${computerChoice}.\n Human Score: ${++humanScore}\n Computer Score: ${computerScore}`);
}

function getComputerChoice() {
    return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?").toLowerCase();
}