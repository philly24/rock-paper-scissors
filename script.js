
// not industry standard to use global var but im tired rn
/**
 * getComputerChoice - A function to randomly determine the computer's choice in a round of "Rock, Paper, Scissors".
 *
 * @return {string} The computer's choice for this round. One of 'rock', 'paper', or 'scissors'.
 *
 * The function works by creating an array of the possible choices and then selecting a random index from that array. 
 * The choice at the selected index is then returned as the computer's choice. This ensures that each choice ('rock', 'paper', 
 * 'scissors') is equally likely to be chosen.
 */
function getComputerChoice() {
    // Define an array of the possible choices
    const arrayOfChoice = ["rock", "paper", "scissors"];

    // Generate a random index for the array
    let randomChoice = Math.floor(Math.random() * 3);

    // Log the randomly chosen item to the console for debugging
    console.log(arrayOfChoice[randomChoice]);

    // Return the randomly chosen item
    return arrayOfChoice[randomChoice];
}

/**
 * playRound - A function to determine the outcome of a round of the game "Rock, Paper, Scissors".
 *
 * @param  {string} playerSelection   The player's choice for this round. Expected to be 'rock', 'paper', or 'scissors'.
 * @param  {string} computerSelection The computer's choice for this round. Also expected to be 'rock', 'paper', or 'scissors'.
 * @return {number} 1 if player wins, -1 if computer wins, 0 if it's a draw.
 */
function playRound(playerSelection, computerSelection) {
    // Define an object where the keys are choices and the values are what they beat
    const wins = {
        'rock': 'scissors',  
        'scissors': 'paper', 
        'paper': 'rock'     
    };

    if (playerSelection === computerSelection) {
        console.log("It's a draw!");
        return 0;
    } else if (wins[playerSelection] === computerSelection) {
        console.log(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
        return 1;
    } else {
        console.log(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`);
        return -1;
    }
}

/**
 * game - A function that drives a "best out of 5" game of "Rock, Paper, Scissors" between the player and the computer.
 *
 * This function repeatedly prompts the player for their choice, gets the computer's choice by calling the getComputerChoice 
 * function, and determines the outcome of the round by calling the playRound function. It keeps track of the scores and 
 * continues to play rounds until either the player or the computer has won 5 rounds. At that point, it determines the overall 
 * winner of the game and logs a message to the console accordingly.
 */
function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("rock, paper, or scissors? ");
        const roundResult = playRound(playerSelection, getComputerChoice());

        if (roundResult === 1) {
            playerScore++;
        } else if (roundResult === -1) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You won the best out of 5!");
    } else {
        console.log("You lost the best out of 5 :(");
    }
}

game();
