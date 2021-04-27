function computerPlay() {
    return Math.floor(Math.random() * 3)
}

function numberChoice(num) {
    return ['rock', 'paper', 'scissors'][num]
}


function playRound(playerSelection, computerSelection){
    if(playerSelection === 'rock') {
        if(computerSelection === 'paper') {
            computerScore++;
            return lose;
        }
        else if(computerSelection === 'rock'){
            return tie;
        }
        else {
            userScore++;
            return win;
        }
    }
    if(playerSelection === 'paper') {
        if(computerSelection === 'paper') {
            return tie;
        }
        else if(computerSelection === 'rock'){
            userScore++
            return win;
        }
        else {
            computerScore++;
            return lose;
        }
    }
    if(playerSelection === 'scissors') {
        if(computerSelection === 'paper') {
            userScore++;
            return win;
        }
        else if(computerSelection === 'rock'){
            computerScore
            return lose;
        }
        else {
            return tie;
        }
    }
}

let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "you win";
let lose = "you lose";
let tie = "it's a tie";

for(let i = 0; i <5; i++) {
    const computerSelection = numberChoice(computerPlay());
    const playerSelection = prompt('Rock, Paper, Scissors').toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your Score " + userScore);
    console.log("Computer Score " + computerScore);
    
}
if(userScore > computerScore) {
    console.log("You are the winner!!!")
    }
    else {
        console.log("The Computer is the winner")
    }