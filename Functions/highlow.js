
var prompt = require('prompt-sync')();

function highLowGame() {
    // generate a random number 1 - 1000
    var secretNumber = Math.floor(Math.random() * 1000) + 1

    var tries = 0
    do {
        // ask the user to take a guess
        var guess = prompt('What number am I thinking of ? ');

        // change guess to an integer
        guess = parseInt(guess);

        // check to see higher/lower
        if (guess > secretNumber) {
            console.log("Lower!");
        } else if (guess < secretNumber) {
            console.log("Higher!");
        }

        // add to number of tries
        tries++;

        // loop until correct or 10 guesses

    } while ((guess !== secretNumber) && (tries < 10));
    // end of loop

    // winner if guessed correctly by the 10th guess
    if (guess === secretNumber) {
        console.log("You guessed it!");
    } else {
        // loser otherwise
        console.log(`Sorry, you lost. The number was ${secretNumber}`);
    }
}

// keep playing until the user is done
do {
    highLowGame();

    var input = prompt('Want to play again? (Y/N) ');
} while (input === "Y");