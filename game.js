// Randomly selects word
var Word = require('./word.js');

var wordsArray = ['Cooper', 'Pete', 'Simon', 'Cody', 'Moses']

var Game = function() {
	this.word;
	this.guesses = 0;
}

Game.prototype.generateRandomWord = function() {
	var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]; 
	return new Word(randomWord);
}

Game.prototype.initializeGame = function() {
	this.word = this.generateRandomWord();
	this.guesses = 10;

	console.log("Let's play!");
}

module.exports = Game; 