// Require in word to have all our properties available
var Word = require("./word")

var inquierer = require("inquirer");

// Create a new word object 
// var word = new Word();

var wordArray = ["butts", "burgers"];

var randomNumber = Math.floor((Math.random() * wordArray.length) + 0);

var randomWord = new Word(wordArray[randomNumber]);

console.log(randomWord);



// Make a function for the callback
function askForLetter() {

  inquierer.prompt([
    // Guess a letter
    {
      type: "input",
      message: "guess a letter, please",
      name: "characterGuessed",
    }
  ])
    .then(answers => {
      // Run the check characters function
      console.log(randomWord.guessCharacter(answers.characterGuessed));


      // // // If the word is guessed...
      // if (this.finalOutput.includes(!"_")) {
      //   return;
      // } else if (this.finalOutput.includes("_")) {
      //   askForLetter();
      // }
    });
}


askForLetter();


// ---------------------------------------------------       PSUEDO-CODE: WHAT WE NEED TO DO: -------------------------------------------- // 

// 1) Have a tangible object for the final output so we can see if it includes underscores or not 
// 2) Have the letters of the word array be dynamic, have scoping in general in better shape 


