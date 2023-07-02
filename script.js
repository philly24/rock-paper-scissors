
// not industry standard to use global var but im tired rn
let playerScore = 0;
let computerScore = 0;

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
 * @return {string} {boolean}                  The one with the winning condition gets the win and this is based on the popular kids game 
 *
 */
function playRound(playerSelection, computerSelection) {
    // If both the player and the computer made the same choice, it's a draw
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }

    // Define an object where the keys are choices and the values are what they beat
    const wins = {
        'rock': 'scissors',  
        'scissors': 'paper', 
        'paper': 'rock'     
    };

    // If the player's choice beats the computer's choice (based on the 'wins' object), 
    // then the player wins
    if (wins[playerSelection] === computerSelection) {
        // Construct the winning message, capitalize the first letter of the player's choice
        playerScore += 1;
        return `You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`;
    } else {
        // Otherwise, the computer wins. Construct the losing message, 
        // capitalize the first letter of the computer's choice
        computerScore += 1;
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`;
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

    // Continues to play rounds until either the computer or player has reached 5 wins
    while(computerScore < 5 && playerScore < 5) {

        // Prompt the player for their choice
        let playerSelection = prompt("rock, paper, or sissors? ");

        // Call the playRound function with the player's choice and the computer's choice (determined by calling the getComputerChoice function)
        // Log the outcome of the round
        const methodCall = playRound(playerSelection, getComputerChoice());
        console.log(methodCall);
    }

    // After the loop has finished (meaning either the computer or player has reached 5 wins), determine and log the overall winner
    if(playerScore > computerScore){
        console.log("You won the best out of 5!");
    }
    else{
        console.log("You lost the best out of 5 :(");
    }
}


// calling the driver function 
game();