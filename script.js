//player choices for r, p , s
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
        return("TIE");
    } else if ((computerSelection === "Rock" && playerSelection === "Scissors") || (computerSelection === "Scissors" && playerSelection === "Paper") || (computerSelection === "Paper" && playerSelection === "Rock") ) {
        return("COMPUTER WIN");
    } else {
        return("PLAYER WIN");
    }

}

/* plays r, p, s until someone wins the game*/
function playGame() {
    //score attributes
    let scoreComputer= 0;
    let scorePlayer= 0;

    //while either score attributes aren't five, play game 
    while(!(scoreComputer == 5 || scorePlayer == 5)) {
        //create a variable in order to manipulate playRound's return value.
        let round = playRound(getPlayerSelection(), getComputerSelection());
        console.log(round);

        if(round === "COMPUTER WIN") {
            scoreComputer++;
            console.log("Computer score: " + scoreComputer);
        } else if (round === "PLAYER WIN") {
            scorePlayer++;
            console.log("Player score: " + scorePlayer);
        } 

    }
}

//runs the game.
playGame();
