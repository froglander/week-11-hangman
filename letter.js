// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

/* ************************************************************	*/
/* Method : Letter 												*/
/* Parameters : character										*/
/* Description : This function is used to create a Letter 		*/
/*				 object 										*/
/* ************************************************************	*/
var Letter = function(character) {	
	this.character = character.toUpperCase();
	this.placeholder = '-';
	this.guessed = false;
}

/* ************************************************************	*/
/* Method : getDisplayCharacter 								*/
/* Parameters : none 											*/
/* Description : This function returns either the character or	*/
/*				 placeholder depending on if guessed is true	*/
/* ************************************************************	*/
Letter.prototype.getDisplayCharacter = function() {
    var char = "";
	if(this.guessed) 
		char = this.character;
	else
		char = this.placeholder;

	return char; 
}

/* ************************************************************	*/
/* Method : getCharacter 		 								*/
/* Parameters : none 											*/
/* Description : This function returns the object's character 	*/
/* ************************************************************	*/
Letter.prototype.getCharacter = function() {
	return this.character;
}

module.exports = Letter;