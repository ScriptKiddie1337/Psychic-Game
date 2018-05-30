//Storing Guesses/wins/Losses
let winCount = 0 
let loseCount = 0
let guessCount = 9

//let guessCount = document.getElementById("guess-count")

//Be able to click a key and generate a random number [1]//
let userGuess = document.getElementById("user-guess");
document.onkeyup = function(event) {
  userGuess.textContent = event.key;
  console.log(userGuess)

//generate the winning letter
  function winningNumber() {
    //winningNumberChoice is "guess-count"?
    let winningNumberChoice = "guess-count";
    let letterChoice = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 1; i++)
      winningNumberChoice = letterChoice.charAt(Math.floor(Math.random() * letterChoice.length));
      return winningNumberChoice;
  } 
  console.log("winning number: " + winningNumber());
  //renderGame(userGuess, winningNumberChoice);
  
};




function renderGame(userGuess, winningNumberChoice) {
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
