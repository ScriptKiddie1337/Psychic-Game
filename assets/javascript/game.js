//Global Variables
let winCount = 0 
let loseCount = 0
let guessCount = 9
let winningNumberChoice = $("#guess-count");
let letterChoices = ["a", "b", "c"]; //finish alphabet later
//let guessCount = document.getElementById("guess-count")

//Be able to click a key and generate a random number [1]//
let userGuess = document.getElementById("user-guess");
document.onkeyup = function(event) {
  userGuess.textContent = event.key;
  
  renderGame(event.key);
  
};




function renderGuess(userGuess) {
  winningNumberChoice = letterChoices.charAt(Math.floor(Math.random() * letterChoices.length));
  if (userGuess === winningNumberChoice) {
    return winCount++;
  } 
  else if (userGuess !== winningNumberChoice) {
    return guessCount--;
  }
  else if (guessCount === 0) {
    return loseCount++;
  }
  else if (winCount === 5) {
    alert("You Are Psychic!")
  }
  else if (loseCount === 10) {
    alert("maybe this isn't your shtick")
  }
}



//Displays the Guesses - Up to 9 keys displayed - create a storage to save and keep pushing, like an array or an object, look at how to store data in an array


//Counts wins and losses - similar to rock paper scissors logic

//Counts Guesses - 9 Guesses then losses - similar model to counting wins and losses

//When They Guess Correctly they Win

//Create a winning Number and generate it randomly
