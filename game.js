// Randomly selects word

var Word = require('./word.js');

var wordsArray = ['Cooper', 'Pete', 'Simon', 'Cody', 'Moses']

var Game = function() {
	this.word = this.generateRandomWord();
}

Game.prototype.generateRandomWord = function() {
	var randomWord = wordsArray[Math.floor(Math.random() * wordsArray.length)]; 
	return new Word(randomWord);
}

// Game.prototype.showWord = function() {
// 	console.log("word:", this.word.displayWord.join(''));
// }

module.exports = Game; 