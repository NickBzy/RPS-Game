console.log("Hello World")

function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);
    if (cpuChoice == 0) return "rock";
    else if (cpuChoice ==1) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let humanChoice = prompt("Rock, paper, or scissors?");
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors") {
        alert("Choice can only be one of: [rock, paper, scissors]");
        getHumanChoice();
    }
    return humanChoice;
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, cpuChoice) {
    if (humanChoice == "rock") {
        if (cpuChoice == "rock"){
            console.log("It's a tie! Play again!")
        }
        else if (cpuChoice == "paper"){
            console.log("You lose! Paper beats Rock")
            computerScore += 1
        }
        else if (cpuChoice == "scissors"){
            console.log("You win! Rock beats Scissors")
            humanScore += 1
        }
    }
    else if (humanChoice == "paper") {
        if (cpuChoice == "rock"){
            console.log("You win! Paper beats Rock")
            humanScore += 1
        }
        else if (cpuChoice == "paper"){
            console.log("It's a tie! Play again!")
        }
        else if (cpuChoice == "scissors"){
            console.log("You lose! Scissors beat Paper")
            computerScore += 1
        }
    }
    else if (humanChoice == "scissors"){
        if (cpuChoice == "rock"){
            console.log("You lose! Rock beats Scissors")
            computerScore += 1
        }
        else if (cpuChoice == "paper"){
            console.log("You win! Scissors beat Paper")
            humanScore += 1
        }
        else if (cpuChoice == "scissors"){
            console.log("It's a tie! Play again!")
        }
    }
}

// function playGame() {
//     while(humanScore<5 && computerScore<5){
//         const humanSelection = getHumanChoice()
//         const cpuSelection = getComputerChoice()
//         playRound(humanSelection, cpuSelection)
//     }
//     if (humanScore == 5){
//         console.log(`You win! The final score was ${humanScore} vs. ${computerScore}`)
//     }
//     else if (computerScore == 5){
//         console.log(`You lose! The final score was ${humanScore} vs. ${computerScore}`)
//     }
// }

playGame();