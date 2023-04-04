//player choices for r, p , s
const choices = ["Rock", "Paper", "Scissors"];

//global score attributes
let playerCount= 0;
let computerCount= 0;

//DOM score tag
const scoreDisplay = document.querySelector("#scoreDisplay");

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


/* plays a round of r, p, s & records game-score on scoreDisplay tag*/

function playRound(playerSelection, computerSelection) {
    //ties, computer wins, player wins.
    if(computerSelection === playerSelection ) {
        return("TIE");
    } else if ((computerSelection === "Rock" && playerSelection === "Scissors") 
           || (computerSelection === "Scissors" && playerSelection === "Paper") 
           || (computerSelection === "Paper" && playerSelection === "Rock") ) {
        computerCount++;
    } else {
        playerCount++;
    }
    
    scoreDisplay.textContent = `Player: ${playerCount} Computer: ${computerCount}`;

    if(playerCount == 5 || computerCount == 5) {
        gameEnd();
    }
}


//make a pop up with try again 

function gameEnd() {
   scoreDisplay.textContent = `SOMEBODY WON`
   computerCount = 0;
   playerCount = 0;
 }
 


