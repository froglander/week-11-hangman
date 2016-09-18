// Contains logic of app
var Game = require('./game.js');
var inquirer = require('inquirer');
var os = require('os');

var hangman = new Game();

// Display word with dashes
//hangman.showWord();

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
		//console.log("userLetter:", userLetter);

		var correct = hangman.word.checkLetter(userLetter);
		//console.log("correct:", correct);
		// if(correct){
		// 	console.log("You guessed a correct letter");		
		// } else {
		// 	console.log("That letter was incorrect");
		// }
		//console.log(hangman.word.getDisplayWord());
		playGame();

	});
}

playGame();
//console.log("hangman.word:", hangman.word);
// Accept letter guess
//hangman.word.getDisplayString();
// var test = ['Cooper', 'Pete', 'Simon', 'Cody', 'Moses'];
// for (var value of test) {
// 	console.log(value);
// }

// Check if letter is in word

// If letter is in word, update display

// Accept another letter guess

// Repeat
