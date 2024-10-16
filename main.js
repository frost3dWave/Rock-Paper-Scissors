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


