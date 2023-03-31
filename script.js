
const choices = ["Rock", "Paper", "Scissors"];


/* used to get the computer choice  */
function getComputerSelection() {
   const choice = choices[Math.floor(Math.random() * choices.length)];
   return choice;
}

/* used to input the players choice */
function getPlayerSelection() {
   const userInput = prompt("Enter your choice: ", undefined)
   let choice;

    for(let i = 0; i < choices.length; i++) {
        if(userInput.toLowerCase() === choices[i].toLowerCase()) {
             choice = choices[i];
        }
    }

    return choice;

}

/* plays a round of r, p, s*/

/*
 rock beats scissors
 scissors beat paper
 paper beats rock
*/

function playRound(playerSelection, computerSelection) {
    //ties, computer wins, player wins.
    if(computerSelection === playerSelection ) {
        console.log("It's a tie!");
    } else if ((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Scissors" && playerSelection === "Paper") || (computerSelection === "Paper" && playerSelection === "Rock") ) {
        console.log("Computer wins!");
    } else {
        console.log("You win!");
    }

}

/* plays r, p, s until someone wins the game*/
function playGame() {
    let score;
}

