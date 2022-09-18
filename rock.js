scoreButton = document.querySelector('.btn');

//establish buttons and function of input
const rBtn = document.querySelector('#rockBtn');
const pBtn = document.querySelector('#paperBtn');
const sBtn = document.querySelector('#scissorsBtn');

//score counters//
let playerWins = 0
let computerWins = 0

rBtn.addEventListener('click', respondRock); 

function respondRock() {
    game("rock");
};

pBtn.addEventListener('click', respondPaper); 

function respondPaper() {
    game("paper");
};

sBtn.addEventListener('click', respondScissors); 

function respondScissors() {
    game("scissors");
};

scoreButton.addEventListener('click', function() {
    results.appendChild(scoreContainer);
}, {once: true});


//begin game with button selection as player input
function game(playerSelection) {
    //produce computer choice//
    const computerSelection = getComputerChoice();
    //display outcome//
    resultComment.textContent = playRound(playerSelection, computerSelection);

    scoreHeader.textContent = "Current score:"
    playerScore.textContent = `Player Score: ${playerWins}`
    computerScore.textContent = `Computer Score: ${computerWins}`

    scoreContainer.appendChild(resultComment);
    scoreContainer.appendChild(scoreHeader);
    scoreContainer.appendChild(br);
    scoreContainer.appendChild(playerScore);
    scoreContainer.appendChild(br);
    scoreContainer.appendChild(computerScore);

    if ((computerWins == 5) || (playerWins == 5)) {
    victory();
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

/*declare winner, loser, or draw.
All of this could honestly be way trimmed down if I used a simple three variable inside of three variable win detection, or even a win condition array,
followed by a `${playerSelection} beats ${computerSelection}`.
I want to acknowledge there's a much more succinct way of doing this, but also I prefer having specific jokes about the win, lose, or draw conditions.
There may be a more succinct way of doing that as well, and if I think of one, I'll revisit this.*/

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            playerWins++;
            return "You win! Rock beats scissors. Dismantle the tools of production! You have nothing to lose but your chains!";
        }
        else if (computerSelection == "paper") {
            computerWins++;
            return "You lose! Paper beats rock. Somehow. The whole paper beating rock thing never really made sense, did it?";
        }
        else {
            return "A tie! You're not gonna get very far banging two rocks together.";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            playerWins++;
            return "You win! Paper beats rock. Conceal their weapons and you will never know defeat.";
        }
        else if (computerSelection == "scissors") {
            computerWins++;
            return "You lose! Scissors beats paper. Hope that document wasn't important.";
        }
        else {
            return "A tie! Stop rubbing your paper on my paper. That's not actually how carbon paper works. Stop. Why are you staring at me? This feels weird.";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            playerWins++;
            return "You win! Paper beats scissors. If there's no receipt, you can't prove it happened.";
        }
        else if (computerSelection == "rock") {
            computerWins++;
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

//declare a winner
function victory() {
    if (playerWins > computerWins) {
    win = document.createElement('div');
    win.textContent = "You won!";
    scoreContainer.append(win);
    }
    else{
    lose = document.createElement('div');
    lose.textContent = "You lost!";
    scoreContainer.append(lose);
    }
    rBtn.removeEventListener('click', respondRock); 
    
    pBtn.removeEventListener('click', respondPaper);
    
    sBtn.removeEventListener('click', respondScissors);
}

//DOM for win counter which should ideally appear after the first round//
const results = document.querySelector('.results');
const resultComment = document.createElement('p');
const scoreContainer = document.createElement('div');
const scoreHeader = document.createElement('div');
const playerScore = document.createElement('div');
const computerScore = document.createElement('div');
const br = document.createElement('br');