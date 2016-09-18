//word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var Letter = require('./letter.js');

var Word = function(targetWord) {
	this.targetWord = targetWord;
	this.letterObjArray = this.createLetterObjArray();	
}

Word.prototype.getWord = function() {
	return this.targetWord;
}

Word.prototype.createLetterObjArray = function() {
	var letObjArray = [];
	for (var i = 0; i < this.targetWord.length; i++) {
		letObjArray.push(new Letter(this.targetWord[i]));
	}
	return letObjArray;
}

Word.prototype.checkLetter = function(letter) {	
	var isCorrect = false;
	for (var i = 0; i < this.letterObjArray.length; i++) {
		if(letter === this.letterObjArray[i].getCharacter()) {
			this.letterObjArray[i].guessed = true;
			isCorrect = true;
		}
	}
	return isCorrect;
}

Word.prototype.getDisplayWord = function() {
	var display = '';

	for (var i = 0; i < this.letterObjArray.length; i++) {
		display += this.letterObjArray[i].getDisplayCharacter();
	}
	return display;
}

Word.prototype.getTargetWord = function() {
	return this.targetWord.toUpperCase();
}

module.exports = Word;