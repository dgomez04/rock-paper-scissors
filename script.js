//player choices for r, p , s
const choices = ["Rock", "Paper", "Scissors"];


/* used to get the computer choice  */
function getComputerSelection() {
   const choice = choices[Math.floor(Math.random() * choices.length)];
   return choice;
}

//eventListener that calls the playRound function everytime the player chooses a button.

const playerChoice = document.querySelectorAll("button");

playerChoice.forEach((button) => {
    button.addEventListener('click', () => {
        console.log(playRound(button.id, getComputerSelection()));
    });
});


/* plays a round of r, p, s*/
//TODO: create a counter tag that records the games score, edited everytime playRound() is called.

function playRound(playerSelection, computerSelection) {
    //ties, computer wins, player wins.
    if(computerSelection === playerSelection ) {
        return("TIE");
    } else if ((computerSelection === "Rock" && playerSelection === "Scissors") 
           || (computerSelection === "Scissors" && playerSelection === "Paper") 
           || (computerSelection === "Paper" && playerSelection === "Rock") ) {
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
