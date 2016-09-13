var Word = require('./word.js');

var wordsArray = ['Cooper', 'Pete', 'Simon', 'Cody', 'Moses']

var Game = function() {
	this.word = this.generateRandomWord();
}

Game.prototype.showWord = function() {
	console.log("word:", this.word);
}

Game.prototype.generateRandomWord = function() {
	var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]; 
	return new Word(randomWord);
}

module.exports = Game; 