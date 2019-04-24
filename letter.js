// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly


class Letter {
    constructor(character, hasBeenGuessed) {
        this.character = character;
        this.hasBeenGuessed = hasBeenGuessed;
    }
    returnCharacter() {
        if (this.hasBeenGuessed) {
            return this.character;
        } else {
            return "_";
        }
    }
    checkCharacter(characterGuessed) {
        if (characterGuessed === this.character) {
            this.hasBeenGuessed = true;
        } return this.hasBeenGuessed;
    }
}

// const z = new Letter ("z", false);

// Check to make sure the methods work before moving on

// console.log(z.checkCharacter("z"));

// z.hasBeenGuessed = false;

// console.log(z.returnCharacter());

module.exports = Letter;
