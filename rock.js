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