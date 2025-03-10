console.log("Hello World")

let humanScore = 0
let computerScore = 0

const displayHumanScore = document.querySelector("#playerScore");
const displayComputerScore = document.querySelector("#cpuScore");
const displayFinalResult = document.querySelector("#result");
const resetButton = document.querySelector("#reset");
const choices = document.querySelectorAll(".playerContainer .rock, .playerContainer .paper, .playerContainer .scissors");

const humanRock = 

choices.forEach(choice=> {
    choice.addEventListener("click", function(event) {
        if (humanScore >= 5 || computerScore >= 5) return;
        const humanChoice = event.currentTarget.classList[0];
        const cpuSelection = getComputerChoice();

        playRound(humanChoice, cpuSelection);
        checkWinner();
    });
});

function getComputerChoice() {
    let cpuChoice = Math.floor(Math.random() * 3);
    if (cpuChoice == 0) return "rock";
    else if (cpuChoice ==1) return "paper";
    else return "scissors";
}

function playRound(humanChoice, cpuChoice) {
    document.querySelectorAll(".playerContainer .rps div").forEach(div => {
        div.style.border = "none";
    });
    document.querySelectorAll(".cpuContainer .rps div").forEach(div => {
        div.style.border = "none";
    });

    const selectedHuman = document.querySelector(`.playerContainer .${humanChoice}`)
    const selectedCpu = document.querySelector(`.cpuContainer .${cpuChoice}`)

    if (humanChoice == "rock") {
        if (cpuChoice == "rock"){
            console.log("It's a tie! Play again!")
            selectedCpu.style.border = "3px solid #E9C46A";
            selectedHuman.style.border = "3px solid #E9C46A";
        }
        else if (cpuChoice == "paper"){
            console.log("You lose! Paper beats Rock")
            computerScore++;
            displayComputerScore.innerText = computerScore
            selectedCpu.style.border = "3px solid #F4A261";
            selectedHuman.style.border = "3px solid #E76F51";
        }
        else if (cpuChoice == "scissors"){
            console.log("You win! Rock beats Scissors")
            humanScore++
            displayHumanScore.innerText = humanScore
            selectedHuman.style.border = "3px solid #F4A261";
            selectedCpu.style.border = "3px solid #E76F51";
        }
    }
    else if (humanChoice == "paper") {
        if (cpuChoice == "rock"){
            console.log("You win! Paper beats Rock")
            humanScore++
            displayHumanScore.innerText = humanScore
            selectedHuman.style.border = "3px solid #F4A261";
            selectedCpu.style.border = "3px solid #E76F51";
        }
        else if (cpuChoice == "paper"){
            console.log("It's a tie! Play again!")
            selectedCpu.style.border = "3px solid #E9C46A";
            selectedHuman.style.border = "3px solid #E9C46A";
        }
        else if (cpuChoice == "scissors"){
            console.log("You lose! Scissors beat Paper")
            computerScore++;
            displayComputerScore.innerText = computerScore
            selectedCpu.style.border = "3px solid #F4A261";
            selectedHuman.style.border = "3px solid #E76F51";
        }
    }
    else if (humanChoice == "scissors"){
        if (cpuChoice == "rock"){
            console.log("You lose! Rock beats Scissors")
            computerScore++;
            displayComputerScore.innerText = computerScore
            selectedCpu.style.border = "3px solid #F4A261";
            selectedHuman.style.border = "3px solid #E76F51";
        }
        else if (cpuChoice == "paper"){
            console.log("You win! Scissors beat Paper")
            humanScore++
            displayHumanScore.innerText = humanScore
            selectedHuman.style.border = "3px solid #F4A261";
            selectedCpu.style.border = "3px solid #E76F51";
        }
        else if (cpuChoice == "scissors"){
            console.log("It's a tie! Play again!")
            selectedCpu.style.border = "3px solid #E9C46A";
            selectedHuman.style.border = "3px solid #E9C46A";
        }
    }
}

function checkWinner() {
    if (humanScore === 5){
        console.log("You win!")
        displayFinalResult.style.display = "block"
        displayFinalResult.innerText = "You win!"
        displayFinalResult.style.color = "#FFD700"
        resetButton.style.display = "block"
    }
    else if (computerScore === 5){
        console.log("You lose!")
        displayFinalResult.style.display = "block"
        displayFinalResult.innerText = "You lose!"
        displayFinalResult.style.color = "#DC143C"
        resetButton.style.display = "block"
    } 
}

function resetGame() {
    humanScore = 0
    computerScore = 0
    displayHumanScore.innerText = humanScore
    displayComputerScore.innerText = computerScore
    displayFinalResult.style.display = "none"
    displayFinalResult.innerText = ""
    resetButton.style.display = "none"
    document.querySelectorAll(".playerContainer .rps div").forEach(div => {
        div.style.border = "none";
    });
    document.querySelectorAll(".cpuContainer .rps div").forEach(div => {
        div.style.border = "none";
    });
}

resetButton.addEventListener("click", resetGame)