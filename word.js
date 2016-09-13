//word.js should contain all of the methods which will check the letters guessed versus the random word selected.

var Letter = require('./letter.js');

var Word = function(randomWord) {
	this.word = randomWord;
}

Word.prototype.getWord = function() {
	return this.word;
}

 module.exports = Word;