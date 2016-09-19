// Randomly selects word
var Word = require('./word.js');

var wordsArray = ['Cooper', 'Pete', 'Simon', 'Cody', 'Moses']

/* ************************************************************	*/
/* Method : Game 				 								*/
/* Parameters : none 											*/
/* Description : This function is used to create a Game object.	*/
/* ************************************************************	*/
var Game = function() {
	this.word;
	this.guesses = 0;
}

/* ************************************************************	*/
/* Method : generateRandomWord  								*/
/* Parameters : none 											*/
/* Description : This function returns a random word from an	*/
/*				 array of words 								*/
/* ************************************************************	*/
Game.prototype.generateRandomWord = function() {
	var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]; 
	return new Word(randomWord);
}

/* ************************************************************	*/
/* Method : initializeGame  					 				*/
/* Parameters : guesses											*/
/* Description : This function initializes the Game values 		*/
/*				 with number of allowed guesses as a parameter	*/
/* ************************************************************	*/
Game.prototype.initializeGame = function(guesses) {
	this.word = this.generateRandomWord();
	this.guesses = guesses;

	console.log("Let's play!");
}

module.exports = Game; 