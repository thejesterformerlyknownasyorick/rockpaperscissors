let playerWins = 0;
let compWins = 0;
game();
console.log(victory());

//declare winner, loser, or tie//
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            playerWins += 1;
            return "You win! Rock beats scissors. Dismantle the tools of production! You have nothing to lose but your chains!";
        }
        else if (computerSelection == "paper") {
            compWins += 1;
            return "You lose! Paper beats rock. Somehow. The whole paper beating rock thing never really made sense, did it?";
        }
        else {
            return "A tie! You're not gonna get very far banging two rocks together.";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWins += 1;
            return "You win! Paper beats rock. Conceal their weapons and you will never know defeat.";
        }
        else if (computerSelection == "scissors") {
            compWins += 1;
            return "You lose! Scissors beats paper. Hope that document wasn't important.";
        }
        else {
            return "A tie! Stop rubbing your paper on my paper. That's not actually how carbon paper works. Stop. Why are you staring at me? This feels weird.";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerWins += 1;
            return "You win! Paper beats scissors. If there's no receipt, you can't prove it happened.";
        }
        else if (computerSelection == "rock") {
            compWins += 1;
            return "You lose! Rock beats scissors. But it can never break your spirit.";
        }
        else {
            return "Scissors and scissors. A tie! But a win for the LGBTQIA+ community.";
        }
    }
    else {
        return "No you're doing it wrong. Stop it. You're ruining my game."
    }
}

//create a random number, 1-3//
function getComputerChoice() {
    let x;
    x = Math.floor(Math.random() * 3) + 1;
//translate random number to rock, paper, or scissors (unnecessary, but for ease of reading)//
    if (x == 1) {
        return "rock";
    }
    else if (x == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//game only runs for 5 rounds
function game() {
    for (let i = 0; i < 5; i++) {
        //get user input//
        const playerSelection = prompt("Pick rock, paper, or scissors.").toLowerCase();
        //produce computer choice//
        const computerSelection = getComputerChoice();
        //display outcome//
        playRound(playerSelection, computerSelection);
        console.log(playRound(playerSelection, computerSelection));
     }
}

//declare a winner
function victory() {
    if (playerWins > compWins) {
    return "You won!";
    }
    else if (playerWins < compWins) {
        return "You lost!";
    }
    else {
        return "A tie?! But I wanted to see someone lose a finger.";
    }
}