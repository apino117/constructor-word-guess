// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

// Require in letter to have all our properties available
var Letter = require("./letter")

var letter = new Letter;

// Universal Arrays for the Functions
var wordString = [];
var toStringArray = [];

// Word Constructor
class Word {

    constructor(letters) {
        this.letters = letters;
    }
    returnString() {

        this.letters.split("");

        // Take each letter from our plain old string and make it a dynamic letter object
        for (var i = 0; i < this.letters.length; i++) {
            wordString.push(new Letter(this.letters[i]))
        };

        // Then take each letter from THAT array and check if it's been guessed or not 
        for (var j = 0; j < wordString.length; j++) {
            toStringArray.push(wordString[j].returnCharacter());
        };

        // String all the characters together
        console.log(toStringArray.join(" "));
    }
    guessCharacter(characterGuessed) {

        this.letters.split("");

        // Take each letter from our plain old string and make it a dynamic letter object
        for (var i = 0; i < this.letters.length; i++) {
            wordString.push(new Letter(this.letters[i], false))
        };

        for (var h = 0; h < wordString.length; h++) {
            console.log(wordString[h].checkCharacter(characterGuessed));
        };

        // ------ Struggling to modularize this bit ------ //
        for (var j = 0; j < wordString.length; j++) {
            toStringArray.push(wordString[j].returnCharacter());
        };

        var finalOutput = toStringArray.join(" ");

        console.log(finalOutput);

        this.finalOutput = finalOutput;
    }
}



// const butts = new Word("butts");

// console.log(butts.letters[0]);

// butts.returnString();

// butts.guessCharacter("t");

// console.log(butts);

module.exports = Word;