let playerWinCount = 0;
let computerWinCount = 0;

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display choices
    document.getElementById("playerChoice").querySelector("span").innerText = playerChoice;
    document.getElementById("computerChoice").querySelector("span").innerText = computerChoice;

    // Determine winner
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "rock")
    ) {
        result = "You win!";
        playerWinCount++;
    } else {
        result = "Computer wins!";
        computerWinCount++;
    }

    // Display result
    document.getElementById("resultText").innerText = result;

    // Update win counters
    document.getElementById("playerWins").innerText = `Your Wins: ${playerWinCount}`;
    document.getElementById("computerWins").innerText = `Computer Wins: ${computerWinCount}`;
}