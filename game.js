
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userGuesses = [];
var wins = 0;
var losses = 0;
var guessesLeft = 9;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess)

document.getElementById("guesses_left").textContent = guessesLeft;

document.onkeyup = function (event) {
    var userGuess = event.key;
    userGuesses.push(userGuess);


    if (userGuess === computerGuess) {
        wins++;
        document.getElementById("wins-text").textContent = wins;
        resetGame();


    } else {
        if (userGuesses.length < guessesLeft) {
            document.getElementById("guesses_far").textContent = userGuesses.join(",");

            document.getElementById("guesses_left").textContent = guessesLeft - userGuesses.length;


        } else {
            losses++;
            document.getElementById("losses-text").textContent = losses
            resetGame()
        }
    }

}
function resetGame() {
    userGuesses = [];
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    guessesLeft = 9
    document.getElementById("guesses_left").textContent = guessesLeft;
    document.getElementById("guesses_far").textContent = userGuesses.join(",");
    console.log(computerGuess)
}





