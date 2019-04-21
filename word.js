// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

// Require in letter to have all our properties available
var Letter = require("./letter")

var letter = new Letter

// Word Constructor
class Word {

    constructor(letterArray) {
        this.letterArray = letterArray;
    }
    toString() {

        this.letterArray.split("");

        // Create an array to temporarily hold letters
        var wordString = [];

        // Push letters from word to array
        for (var i = 0; i < this.letterArray.length; i++) {
            wordString.push(new Letter(this.letterArray[i], false))
        };

        // Join letters
        for (var j = 0; j < wordString.length; j++) {
            console.log(wordString[j].returnCharacter());
        };

    }
    guessCharacter(characterGuessed) {

        for (var h = 0; h < wordString.length; h++) {
            console.log(wordString[h].checkCharacter(characterGuessed));
        };

    }
}


const butts = new Word("butts");

// butts.toString();

butts.guessCharacter("t");

// console.log(butts);

module.exports = Word;