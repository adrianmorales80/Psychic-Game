//variables userGuess & computerGuess
var userGuess;
var computerGuess;
var computerGuesses = [];   //used to store string of values that computerGuess will randomly choose from

//counter variables for wins, losses, and guessLeft
var wins = 0;
var losses = 0;
var guessLeft = 10;

//hold references to write to html
var yourGuessText = document.getElementById("your-guess-text");
var davidBlaineText = document.getElementById("david-blaine-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guesses-left-text");
var restartButton = document.getElementById("restart-button")   //variable for the restart button event listener

//creating array using computerGuessChoice
var computerGuessChoice = "abcdefghijklmnopqrstuvwxyz"; //string containing all letters of the alphabet
for (var i = 0; i < computerGuessChoice.length; i++) {
    computerGuesses[i] = computerGuessChoice.charAt(i); //Push characters of string as elements of the array
}
//function that generates when user presses a key
document.onkeyup = function () {
    userGuess = event.key;
    userGuess = userGuess.toLowerCase(); //revert all responses to lower case
    //only display user guess if it is a letter
    if (computerGuesses.includes(userGuess) === true) {
        yourGuessText.textContent = "Your Guess: " + userGuess;
        computerGuess = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];    //chooses random letter from computerGuesses
        davidBlaineText.textContent = "David Blaine's Guess: " + computerGuess;
    }
    if (userGuess === computerGuess && computerGuesses.includes(userGuess) === true) {  //if guess is correct, wins increases and guesses refresh
        alert("Good job! Click OK and your guesses will be refreshed.");
        wins++;
        guessLeft = 10;
    }
    if (userGuess !== computerGuess && computerGuesses.includes(userGuess) === true) {  //if guess is incorrect, losses increases and guesses left decreases
        losses++;
        guessLeft--;
    }
    if (guessLeft === -1){   //if guesses reach 0, alert and refresh page to start over
        alert("Game Over! Click OK to restart");
        guessLeft = 0;
        window.location.reload();
    }
    //write counter values to html
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessLeft;
};

//Event listener to refresh guesses and counters on restart
restartButton.addEventListener("click", function () {
    window.location.reload();
});

//write guess and counter text to html
yourGuessText.textContent = "Your Guess: ";
davidBlaineText.textContent = "David Blaine's Guess: ";
winsText.textContent = "Wins: 0";
lossesText.textContent = "Losses: 0";
guessesLeftText.textContent = "Guesses Left: 10";
