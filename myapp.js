console.log("Hello, world!")

let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const number = Math.floor(Math.random() * 3) + 1;
    let hand = ""

    switch(number) {
        case 1: 
        hand = "rock";
        break;
        case 2: 
        hand = "scissors";
        break;
        case 3:
        hand = "paper";
        break;
    }
    console.log(hand)
    return hand
}

function playRound(playerSelection, computerSelection) {
    let roundMessage = "";
    switch (true) {
        case (playerSelection === "rock" && computerSelection === "rock"):
            roundMessage = "Its a draw!";
            break;

        case (playerSelection === "rock" && computerSelection === "scissors"):
            roundMessage = "Rock beats scissors, you win!";
            playerScore += 1;
            break;

        case (playerSelection === "rock" && computerSelection === "paper"):
            roundMessage = "Paper beats rock, you lose!";
            computerScore += 1;
            break;

        case (playerSelection === "paper" && computerSelection === "rock"):
            roundMessage = "Paper beats rock, you win!";
            playerScore += 1
            break;

        case (playerSelection === "paper" && computerSelection === "scissors"):
            roundMessage = "Scissors beats paper, you lose!";
            computerScore += 1
            break;

        case (playerSelection === "paper" && computerSelection === "paper"):
            roundMessage = "Its a draw!";
            break;

        case (playerSelection === "scissors" && computerSelection === "rock"):
            roundMessage = "Rock beats scissors, you lose!";
            computerScore += 1
            break;

        case (playerSelection === "scissors" && computerSelection === "scissors"):
            roundMessage = "Its a draw";
            break;

        case (playerSelection === "scissors" && computerSelection === "paper"):
            roundMessage = "Scissors beats paper, you win!";
            playerScore += 1
            break;

        default: 
            roundMessage = "Not Nice!";
            break;
    }

    return roundMessage;
}

function askPlayer() {
    const playerSelection = prompt("Enter your selection", "Rock, Paper, Scissors").toLowerCase(); 
    return playerSelection
}

function game() {
    for (let i = 0; i < 5; i++) {
        let roundMessage = playRound(askPlayer(), computerPlay());
        alert((roundMessage) + ` Your score is ${playerScore}, computer's score is ${computerScore}`);
    }

    if (playerScore > computerScore) {
        alert(`End score is Player: ${playerScore} Computer: ${computerScore}, you win!`)
    } else if (playerScore < computerScore) {
        alert(`End score is Player: ${playerScore} Computer: ${computerScore}, you lose!`)
    } else {
        alert(`End score is Player: ${playerScore} Computer: ${computerScore}, its a tie!`)
    }

    playerScore = 0;
    computerScore = 0;
}

console.log(playerSelection, computerPlay());