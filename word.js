// An array of new Letter objects representing the letters of the underlying word
// A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)

// Require in letter to have all our properties available
var Letter = require("./letter")

// Create a new letter object 
var letter = new Letter();

// Entire alphabet(?)
const a = new Letter ("a", false);
const b = new Letter ("b", false);
const c = new Letter ("c", false);
const d = new Letter ("d", false);
const e = new Letter ("e", false);
const f = new Letter ("f", false);
const g = new Letter ("g", false);
const h = new Letter ("h", false);
const i = new Letter ("i", false);
const j = new Letter ("j", false);
const k = new Letter ("k", false);
const l = new Letter ("l", false);
const m = new Letter ("m", false);
const n = new Letter ("n", false);
const o = new Letter ("o", false);
const p = new Letter ("p", false);
const q = new Letter ("q", false);
const r = new Letter ("r", false);
const s = new Letter ("s", false);
const t = new Letter ("t", false);
const u = new Letter ("u", false);
const v = new Letter ("v", false);
const w = new Letter ("w", false);
const x = new Letter ("x", false);
const y = new Letter ("y", false);
const z = new Letter ("z", false);

// Word Constructor
class Word {

    constructor(letterArray) {
        this.letterArray = letterArray;
    }
    toString() {

        // Create an array to temporarily hold letters
        var wordString = [];

        // Push letters from word to array
        this.letterArray.forEach(function(letter) {
            wordString.push(letter.character);
        }); 

        // Join letters
        console.log(wordString.join(""));

    }
    guessCharacter(characterGuessed) {

        // For every letter in the array check if it's been guessed 
        this.letterArray.forEach(function(letter) {

            // Check the letter against the guessed letter
            console.log(letter.checkCharacter(characterGuessed));
        }); 
    }
}


const butts = new Word ([b, u, t, t, s]);

// butts.toString();

butts.guessCharacter("t");