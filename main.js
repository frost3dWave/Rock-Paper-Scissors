const buttons = document.querySelectorAll("button");

const userScoreCard = document.querySelector(".userScoreCard");
const computerScoreCard = document.querySelector(".computerScoreCard");
const results = document.querySelector(".results");
const resultsBoard = document.querySelector(".results_board");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

buttons.forEach(button => {
    button.addEventListener("click", getUserChoice);
});

let userScore = 0;
let computerScore = 0;

function getUserChoice(e) {
   let userSelection = e.target.textContent;
   let computerSelection = getComputerChoice();
   playRound(userSelection, computerSelection);
}

function playRound(userSelection, computerSelection) {
    if (userSelection === computerSelection) {
        resultsBoard.textContent = `It's a tie!`;
    }else if((userSelection === "rock" && computerSelection === "scissors") || (userSelection === "paper" && computerSelection === "rock") || (userSelection === "scissors" && computerSelection === "paper")) {
        userScore++;
        userScoreCard.textContent = userScore;
        resultsBoard.textContent = `User Wins the round!\n${userSelection} beats ${computerSelection}!`;
    }else{
        computerScore++;
        computerScoreCard.textContent = computerScore;
        resultsBoard.textContent = `Computer wins the round!\n${computerSelection} beats ${userSelection}!`;
    }
    checkWinner(userScore, computerScore);
}

function checkWinner(userScore, computerScore){
    if(userScore === 5){
        buttons.forEach(button => {
            button.removeEventListener("click", getUserChoice);
            button.setAttribute("class", "button_disabled");
        });
        resultsBoard.textContent = `USER WINS THE GAME!`
        playAgain();
    }else if(computerScore === 5){
        buttons.forEach(button => {
            button.removeEventListener("click", getUserChoice);
            button.setAttribute("class", "button_disabled");
        });
        resultsBoard.textContent = `COMPUTER WINS THE GAME!`
        playAgain();
    }
}

function playAgain(){
    const playAgain = document.createElement("div");
    playAgain.textContent = `PLAY AGAIN!`;
    playAgain.setAttribute("class", "reload");
    results.appendChild(playAgain);
    playAgain.addEventListener("click", () => {
        playAgain.classList.add("active");
        window.location.reload();
    });
}