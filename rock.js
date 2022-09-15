//begin game//
function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You win! Rock beats scissors. Dismantle the tools of production! You have nothing to lose but your chains!";
        }
        else if (computerSelection == "paper") {
            return "You lose! Paper beats rock. Somehow. The whole paper beating rock thing never really made sense, did it?";
        }
        else {
            return "A tie! You're not gonna get very far banging two rocks together.";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "You win! Paper beats rock. Conceal their weapons and you will never know defeat.";
        }
        else if (computerSelection == "scissors") {
            return "You lose! Scissors beats paper. Hope that document wasn't important.";
        }
        else {
            return "Scissors and scissors. A tie! But a win for the LGBTQIA+ community.";
        }
    }
    else {
        if (computerSelection == "paper") {
            return "You win! Paper beats scissors. If there's no receipt, you can't prove it happened.";
        }
        else if (computerSelection == "rock") {
            return "You lose! Rock beats scissors. But it can never break your spirit.";
        }
        else {
            return "A tie! Stop rubbing your paper on my paper. That's not actually how carbon paper works. Stop. Why are you staring at me? This feels weird.";
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
//get user input, limited to rock, paper, or scissors//
//create a random number, 1-3//
function getComputerChoice() {
    let x;
    x = Math.floor(Math.random() * 3) + 1;
//translate random number to r, p, or s//
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

//compare user input to random choice//
//declare winner, loser, or tie//