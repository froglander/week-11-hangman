// Contains logic of app
var Game = require('./game.js');
var inquirer = require('inquirer');
var os = require('os');

var hangman = new Game();

hangman.initializeGame();

playGame();

function playGame() {
	console.log(os.EOL + hangman.word.getDisplayWord() + os.EOL);

	inquirer.prompt([
		{
			type: "input",
			name: "inputLetter",
			message: "Guess a letter:"
		}
	]).then(function(data) {
		var userLetter = data.inputLetter.toUpperCase();

		var correct = hangman.word.checkLetter(userLetter);

		if(!correct) { 
			hangman.guesses--; 
		}

		var guessedWord = hangman.word.getDisplayWord() === hangman.word.getTargetWord();		

		if (hangman.guesses > 0 && !guessedWord) {
			playGame();
		}
		else {
			if(guessedWord) {
				console.log("Good job, you won!");
			} else {
				console.log("Game over, you lost!");	
			}
			

		}

	});
}
