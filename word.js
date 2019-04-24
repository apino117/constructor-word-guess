// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

// Require in letter to have all our properties available
var Letter = require("./letter")

var letter = new Letter;

// Universal Arrays for the Functions
// var wordString = [];


// Word Constructor
class Word {

    constructor(letters) {
        this.letters = letters.split("");
        const lettersArr = [];
        for (var i = 0; i < letters.length; i++) {
            lettersArr.push(new Letter(this.letters[i], false))
        }
        this.lettersArr = lettersArr;
    }
    returnString() {

        var toStringArray = [];

        for (var i = 0; i < this.lettersArr.length; i++) {
            toStringArray.push(this.lettersArr[i].returnCharacter());
        }

        // // String all the characters together
        console.log(toStringArray.join(" "));

    }
    guessCharacter(characterGuessed) {

        for (var i = 0; i < this.lettersArr.length; i++) {
            console.log(this.lettersArr[i].checkCharacter(characterGuessed));
        };
    }
}




// const butts = new Word("butts");

// console.log(butts.letters[0]);

// butts.returnString();

// butts.guessCharacter("t");

// console.log(butts);

module.exports = Word;