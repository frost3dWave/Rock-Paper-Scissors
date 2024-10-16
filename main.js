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


