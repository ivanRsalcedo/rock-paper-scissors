
let humanScore = 0, computerScore = 0;
let gameOver = false;
const resultsDisplay = document.querySelector('#results-display');

document.querySelector('#choice-buttons').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON' && !gameOver) {
        playRound(e.target.textContent, getComputerChoice());
    }
});

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)
        resultsDisplay.textContent = `TIE!`;
    else if (
        (humanChoice === "✊" && computerChoice === "🖐") ||
        (humanChoice === "🖐" && computerChoice === "✌") ||
        (humanChoice === "✌" && computerChoice === "✊")
    ) {
        showResult(`Computer wins! \n${computerChoice} beats ${humanChoice}`);
        document.getElementById('computer-score').textContent = ++computerScore;
    } else {
        showResult(`Human wins! \n${humanChoice} beats ${computerChoice}`);
        document.getElementById('human-score').textContent = ++humanScore;
    }
    if (humanScore === 5 || computerScore === 5) {
        showResult(`Game Over!\n${humanScore === 5 ? "Human" : "Computer"} wins!`);
        gameOver = true;
    }
}

function getComputerChoice() {
    return ["✊", "🖐", "✌"][Math.floor(Math.random() * 3)];
}

function showResult(string) {
    resultsDisplay.textContent = string;
}