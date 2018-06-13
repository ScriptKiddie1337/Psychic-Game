 //Global Variables
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"];

var guessedLetters = [];

var letterToGuess = null;

var guessesLeft = 9;

var wins = 0;
var losses = 0;


var updateGuessesLeft = function() {
  document.querySelector("#guesses-left").innerHTML = guessesLeft;
};
console.log(updateGuessesLeft)
var updateLetterToGuess = function() {
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
};
console.log(updateLetterToGuess)
var updateGuessesSoFar = function() {
  document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
};
console.log(updateGuessesSoFar)

var reset = function() {
  guessesLeft = 9;
  guessedLetters = [];
  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
};

updateLetterToGuess();
updateGuessesLeft();

document.onkeydown = function(event) {
  guessesLeft--;
  var letter = String.fromCharCode(event.which).toLowerCase();
  guessedLetters.push(letter);

  updateGuessesLeft();
  updateGuessesSoFar();

  if (letter === letterToGuess) {
    wins++;
    document.querySelector("#wins").innerHTML = wins;
    reset();
  }
  if (guessesLeft === 0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
  }
}; 