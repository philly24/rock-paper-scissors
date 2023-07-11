/**
 * createGame - A factory function to encapsulate the game state and behaviour.
 *
 * @return {object} An object with methods to start the game and make a player's choice.
 */
function createGame() {
    // These variables hold the scores for the current game.
    let playerScore = 0;
    let computerScore = 0;

    /**
     * getComputerChoice - Randomly determine the computer's choice in a round.
     *
     * @return {string} The computer's choice for this round. One of 'rock', 'paper', or 'scissors'.
     */
    function getComputerChoice() {
        const arrayOfChoice = ["rock", "paper", "scissors"];
        let randomChoice = Math.floor(Math.random() * 3);
        console.log(arrayOfChoice[randomChoice]);
        return arrayOfChoice[randomChoice];
    }

    /**
     * getPlayerChoice - Attach event listeners to the player's choice buttons to get the player's choice.
     */
    function getPlayerChoice() {
        const rockButton = document.getElementById("rockId");
        const paperButton = document.getElementById("paperId");
        const scissorsButton = document.getElementById("scissorsId");

        rockButton.addEventListener("click", function () {
            console.log("rock button was clicked");
            playRound("rock", getComputerChoice());
            game();
        });
        paperButton.addEventListener("click", function () {
            console.log("paper button was clicked");
            playRound("paper", getComputerChoice());
            game();
        });
        scissorsButton.addEventListener("click", function () {
            console.log("scissors button was clicked");
            playRound("scissors", getComputerChoice());
            game();
        });
    }

    /**
     * playRound - Determine the outcome of a round of the game "Rock, Paper, Scissors".
     *
     * @param  {string} playerSelection The player's choice for this round. Expected to be 'rock', 'paper', or 'scissors'.
     * @param  {string} computerSelection The computer's choice for this round. Also expected to be 'rock', 'paper', or 'scissors'.
     */
    function playRound(playerSelection, computerSelection) {
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
            playerScore++;
        } else {
            console.log(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`);
            computerScore++;
        }
    }

    /**
     * game - Check if a player has won the game (reached 5 points) and resets the score.
     */
    function game() {
        if (playerScore === 5) {
            console.log("You won the best out of 5!");
            playerScore = 0;
            computerScore = 0;
        } else if (computerScore === 5) {
            console.log("You lost the best out of 5 :(");
            playerScore = 0;
            computerScore = 0;
        }
    }

    // Return the public interface for the game.
    return { getPlayerChoice, game };
}

// Start a new game when the page loads.
window.onload = function () {
    const game = createGame();
    game.getPlayerChoice();
};
