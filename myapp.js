console.log("Hello, world!")

let computerScore = 0;
let playerScore = 4;
let playerSelection = ""
let hand = ""
let gameWinner = ""
let message = "The score is "

function computerPlay() {
    const number = Math.floor(Math.random() * 3) + 1;

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

    let alertMessage = alert(roundMessage)
    return alertMessage;
}

function askPlayer() {
    playerSelection = prompt("Enter your selection", "Rock, Paper, Scissors").toLowerCase(); 
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

let body = document.body
let buttons = [];

let rockBtn = document.createElement('button');
rockBtn.name = "Rock";
rockBtn.innerHTML = "Rock";

let scissorsBtn = document.createElement('button');
scissorsBtn.name = "Scissors";
scissorsBtn.innerHTML = "Scissors";

let paperBtn = document.createElement('button');
paperBtn.name = "Paper";
paperBtn.innerHTML = "Paper";

let playerText = document.createElement('div');
playerText.innerHTML = "Your hand: ";

let computerText = document.createElement('div');
computerText.innerHTML = "Computer's hand: ";

let playerScoreText = document.createElement('div');
playerScoreText.innerHTML = "Your score: " + playerScore;

let computerScoreText = document.createElement('div');
computerScoreText.innerHTML = "Computer's score: " + computerScore;

let texts = [];
texts.push(playerText, playerScoreText, computerText, computerScoreText)
console.log(texts[1])

for (let i = 0; i < texts.length; i++) {
    body.appendChild(texts[i]);
}

buttons.push(rockBtn, scissorsBtn, paperBtn);
console.log(buttons);

for (let i = 0; i < 3; i++) {
    let playerHand = buttons[i].name.toLowerCase()

    body.appendChild(buttons[i]);
    buttons[i].addEventListener("click", () => {
        playRound(playerHand, computerPlay());
        playerText.innerHTML = "Your hand: " + playerHand
        computerText.innerHTML = "Computer's hand: " + hand
        playerScoreText.innerHTML = "Your score: " + playerScore
        computerScoreText.innerHTML = "Computer's Score: " + computerScore

        if (playerScore == 5 || computerScore == 5) {
            if (playerScore > computerScore) {
                message += "Player: " + playerScore + " , Computer: " + computerScore + " , Player wins!"
            } else {
                message += "Player: " + playerScore + " , Computer: " + computerScore + " , Computer wins!"
            }
            playerScore = 0;
            computerScore = 0;
            playerText.innerHTML = "Your hand: " + playerHand
            computerText.innerHTML = "Computer's hand: " + hand
            playerScoreText.innerHTML = "Your score: " + playerScore
            computerScoreText.innerHTML = "Computer's Score: " + computerScore
            gameEnd();
        }
    })
}



function gameEnd() {
    return gameAlert = alert(message)
}



