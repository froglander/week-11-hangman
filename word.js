// word.js should contain all of the methods which will check 
// the letters guessed versus the random word selected.

var Letter = require('./letter.js');

/* ************************************************************	*/
/* Method : Word 												*/
/* Parameters : targetWord										*/
/* Description : This function is used to create a Word 		*/
/*				 object 										*/
/* ************************************************************	*/
var Word = function(targetWord) {
	this.targetWord = targetWord;
	this.letterObjArray = this.createLetterObjArray();	
}

/* ************************************************************	*/
/* Method : createLetterObjArray 								*/
/* Parameters : none 											*/
/* Description : This function creates an array of Letter  		*/
/*				 objects containing the letters in the word 	*/
/* ************************************************************	*/
Word.prototype.createLetterObjArray = function() {
	var letObjArray = [];
	for (var i = 0; i < this.targetWord.length; i++) {
		letObjArray.push(new Letter(this.targetWord[i]));
	}
	return letObjArray;
}

/* ************************************************************	*/
/* Method : checkLetter 										*/
/* Parameters : letter 											*/
/* Description : This function checks if the letter passed to 	*/
/*				 it is contained in the word and returns true	*/
/* 				 or false 										*/
/* ************************************************************	*/
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

/* ************************************************************	*/
/* Method : getDisplayWord 										*/
/* Parameters : none 											*/
/* Description : This function loops through the letterObjArray	*/
/*				 to create a string from the display characters */
/* ************************************************************	*/
Word.prototype.getDisplayWord = function() {
	var display = '';

	for (var i = 0; i < this.letterObjArray.length; i++) {
		display += this.letterObjArray[i].getDisplayCharacter();
	}
	return display;
}

/* ************************************************************	*/
/* Method : getTargetWord 										*/
/* Parameters : none 											*/
/* Description : This function returns the target word in 		*/
/*				 uppercase 										*/
/* ************************************************************	*/
Word.prototype.getTargetWord = function() {
	return this.targetWord.toUpperCase();
}

module.exports = Word;