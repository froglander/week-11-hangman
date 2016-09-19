// Contains logic of app
var Game = require('./game.js');
var inquirer = require('inquirer');
var os = require('os');

var hangman = new Game();

hangman.initializeGame(5);

playGame();

/* ************************************************************	*/
/* Method : playGame 			  								*/
/* Parameters : none 											*/
/* Description : This function processes the user input and 	*/
/*				 plays the game 								*/
/* ************************************************************	*/
function playGame() {
	// Display the word at the beginning of each round
	// First time through will be all placeholder characters
	console.log(os.EOL + hangman.word.getDisplayWord() + os.EOL);

	// guessedWord is a boolean value that is assigned the result of comparing the
	// current state of the displayWord to the targetWord
	var guessedWord = hangman.word.getDisplayWord() === hangman.word.getTargetWord();		
	// If you have guesses remaining and have not guessed the word, prompt
	// for a character
	if(hangman.guesses > 0 && !guessedWord) {
	// Prompt to get user input
		inquirer.prompt([
		{
			type: "input",
			name: "inputLetter",
			message: "Guess a letter:"
		}
		]).then(function(data) {
			// Uppercase version of user's guess
			var userLetter = data.inputLetter.toUpperCase();
			// Boolean value to hold if correct = true or false
			var correct = hangman.word.checkLetter(userLetter);
			// If not correct, decrement guesses remaining
			if(!correct) { 
				hangman.guesses--; 
			}
			// Play next round
			playGame();
		});		
	} 
	else {
		// Otherwise, if you've guessed the word, say good job
		if(guessedWord) {
			console.log(os.EOL + hangman.word.getDisplayWord() + os.EOL);
			console.log("Good job, you won!");
		} 
		// Or game over message
		else {
			console.log("Game over, you lost!");	
			console.log("The word was: " + hangman.word.getTargetWord());
		}
	}
}
