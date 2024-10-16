function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("Enter your choice: Rock or Paper or Scissors").toLowerCase();

    if ((userChoice === "rock") || (userChoice === "paper") || (userChoice === "scissors")) {
        return userChoice;
    }else if(userChoice === ""){
        getUserChoice();
    }else{
        getUserChoice();
    }
}

let userScore = 0;
let computerScore = 0;

function playRound(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        alert("It's a tie!");
    }else if((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")) {
        alert("User Wins the round!");
        userScore++;
    }else{
        alert("Computer wins the round!");
        computerScore++;
    }
    // console.log(userScore);
    // console.log(computerScore);
}

function playGame() {
    for (let i=0; i<5; i++){
        const userSelection = getUserChoice();
        const computerSelection = getComputerChoice();
        playRound(userSelection, computerSelection);
    }

    console.log(`USER SCORE: ${userScore}`);
    console.log(`COMPUTER SCORE: ${computerScore}`);

    if(userScore === computerScore) {
        alert("The game tied!");
        console.log("The game tied!")
    }else if(userScore > computerScore){
        alert("User wins the Game!");
        console.log("User wins the Game!");
    }else{
        alert("Computer wins the Game!");
        console.log("Computer wins the Game!");
    }
}

playGame();