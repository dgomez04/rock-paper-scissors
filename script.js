//player choices for r, p , s
const choices = ["Rock", "Paper", "Scissors"];

//global score attributes
let playerCount= 0;
let computerCount= 0;

//DOM score tag
const scoreDisplay = document.querySelector("#scoreDisplay");

//DOM Action tags
const playerAction = document.querySelector("#playerAction")
playerAction.setAttribute("style", "white-space: pre;")
const computerAction = document.querySelector("#computerAction")
computerAction.setAttribute("style", "white-space: pre;")

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
    
    //displays content on the specified DOMs
    playerAction.textContent += `${playerSelection}\r\n`;
    computerAction.textContent += `${computerSelection}\r\n`;
    scoreDisplay.textContent = `Player: ${playerCount}  Computer: ${computerCount}`;

    if(playerCount == 5 || computerCount == 5) {
        gameEnd();
        playerAction.textContent = "";
        computerAction.textContent = "";
    }
}




//function to end game and start a new one

function gameEnd() {
    if (playerCount == 5) {
        scoreDisplay.textContent = "YOU WON"
    } else {
        scoreDisplay.textContent = "YOU LOST"
    }

   computerCount = 0;
   playerCount = 0;
 }
 


