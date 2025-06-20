let computerMOve;
if (randomValue >= 0 && randomValue < 1 / 3) {
    computerMove = "ROCK";
} else if (randomValue >= 1 / 3 && randomValue < 2 / 3) {
    computerMOve = "PAPER";
} else {
    computerMOve = "SCISSORS";
}