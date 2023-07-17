/**
 * The createGame function is a factory function that encapsulates 
 * the state and behavior of the game.
 *
 * @return {object} An object with methods to start the game and make a player's choice.
 */
function createGame() {
    // The player and computer scores for the current game.
    let playerScore = 0;
    let computerScore = 0;

    /**
     * The getComputerChoice function randomly determines the computer's choice in a round.
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
     * The getComputerChoiceHelper function sets the computer's image 
     * according to the computer's choice.
     *
     * @param {string} ComputerChoice - The computer's choice for this round.
     */
    function getComputerChoiceHelper(ComputerChoice) {
        switch (ComputerChoice) {
            case "rock":
                document.getElementById('computerImage').src = "./img/rock.png";
                break;
            case "paper":
                document.getElementById('computerImage').src = "./img/paper.png";
                break;
            case "scissors":
                document.getElementById('computerImage').src = "./img/scissors.png";
                break;
        }
    }

    /**
     * The getPlayerChoice function attaches event listeners to the 
     * player's choice buttons to get the player's choice.
     */
    function getPlayerChoice() {
        const rockButton = document.getElementById("rockId");
        const paperButton = document.getElementById("paperId");
        const scissorsButton = document.getElementById("scissorsId");
        // Attach event listeners to player's choice buttons.
        rockButton.addEventListener("click", handleClick);
        paperButton.addEventListener("click", handleClick);
        scissorsButton.addEventListener("click", handleClick);

        /**
         * The handleClick function handles click events for the player's choice buttons.
         */
        function handleClick() {
            const playerChoice = this.id.slice(0, -2);  // Get player's choice from button id
            const computerChoice = getComputerChoice();  // Generate the computer's choice
            document.getElementById('playerImage').src = `./img/${playerChoice}.png`;  // Update player's image
            getComputerChoiceHelper(computerChoice);  // Update computer's image
            playRound(playerChoice, computerChoice);  // Play the round
            game();  // Check the game status
        }
    }

    /**
     * The playRound function determines the outcome of a round of 
     * the game "Rock, Paper, Scissors".
     *
     * @param  {string} playerSelection - The player's choice for this round.
     * @param  {string} computerSelection - The computer's choice for this round.
     */
    function playRound(playerSelection, computerSelection) {
        const wins = {
            'rock': 'scissors',
            'scissors': 'paper',
            'paper': 'rock'
        };
        // Game logic for determining the winner
        if (playerSelection === computerSelection) {
            console.log("It's a draw!");
        } else if (wins[playerSelection] === computerSelection) {
            console.log(`You Win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}`);
            playerScore++;
            // Update the player's score in the DOM
            document.getElementById('playerScore').textContent = playerScore;
        } else {
            console.log(`You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}`);
            computerScore++;
            // Update the computer's score in the DOM
            document.getElementById('computerScore').textContent = computerScore;
        }
    }

    /**
     * The game function checks if a player has won the game (reached 5 points) 
     * and resets the score.
     */
    function game() {
        if (playerScore === 5 || computerScore === 5) {
            // Log and alert the game result
            const message = playerScore === 5 
                ? "You won the best out of 5!" 
                : "You lost the best out of 5 :(";
            console.log(message);
            alert(message);
            // Reset scores
            playerScore = 0;
            computerScore = 0;
            // Reset the scores in the DOM
            document.getElementById('playerScore').textContent = playerScore;
            document.getElementById('computerScore').textContent = computerScore;
            // Reset the images in the DOM
            document.getElementById('playerImage').src = "./img/questionMark.png";
            document.getElementById('computerImage').src = "./img/questionMark.png";
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
