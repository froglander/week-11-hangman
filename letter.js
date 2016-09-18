// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

var Letter = function(character) {	
	this.character = character.toUpperCase();
	this.placeholder = '-';
	this.guessed = false;
}

Letter.prototype.getDisplayCharacter = function() {
    var char = "";
	if(this.guessed) 
		char = this.character;
	else
		char = this.placeholder;

	return char; 
}

Letter.prototype.getCharacter = function() {
	return this.character;
}

// Letter.prototype.checkChar = function() {
// 	var regex = /[a-z]|[0-9]/i;
// 	if (regex.test(this.character)) {
		
// 	}
// }


module.exports = Letter;