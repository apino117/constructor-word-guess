// Require in word to have all our properties available
var Word = require("./word")

var inquierer = require("inquirer");

// Create a new word object 
var word = new Word();

var wordArray = ["butts", "lame"];

var wordToGuess = new Word(wordArray[Math.floor((Math.random() * wordArray.length) + 0)]);

console.log(wordToGuess.toString());

inquierer.prompt([
    // Guess a letter
    {
        type: "input",
        message: "guess a leter",
        name: "characterGuessed",
    }
  ])
  .then(answers => {
    // Run the check characters function
    console.log("You've Guessed " + answers.characterGuessed);
  });




