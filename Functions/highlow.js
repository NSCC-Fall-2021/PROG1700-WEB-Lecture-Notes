
var prompt = require('prompt-sync')();

function highLowGame(levelOptions) {
    // generate a random number 1 - 1000
    var secretNumber = Math.floor(Math.random() * levelOptions.max) + levelOptions.min;

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

    } while ((guess !== secretNumber) && (tries < levelOptions.tries));
    // end of loop


    return {won: guess === secretNumber, secret: secretNumber}
}

// keep playing until the user is done
var levels = {
    'one': { 'tries': 5, 'min': 1, 'max': 10},
    'two': { 'tries': 7, 'min': 1, 'max': 100},
    'three': { 'tries': 10, 'min': 1, 'max': 1000},
    'four': { 'tries': 15, 'min': 1, 'max': 10000},
    'five': { 'tries': 20, 'min': 1, 'max': 100000}
}
var levelNames = ['one', 'two', 'three', 'four', 'five']
var currentLevel = 1;
var tries = 0;
do {
    var levelOptions = levels[levelNames[currentLevel - 1]]

    console.log(`Level: ${currentLevel}`)
    console.log(`  You have ${levelOptions.tries} tries to guess a number between ${levelOptions.min} and ${levelOptions.max}.`)

    var {won, secret} = highLowGame(levelOptions);

    // winner if guessed correctly by the 10th guess
    if (won) {
        console.log("You guessed it!");
        currentLevel++;
        tries = 0;
    } else {
        // loser otherwise
        console.log(`Sorry, you lost. The number was ${secret}`);
        //console.log(`before: tries = ${tries}, currentLevel = ${currentLevel}`)
        tries++;
        //console.log(`middle: tries = ${tries}, currentLevel = ${currentLevel}`)
        if (tries >= 3) {
            currentLevel = 1;
        }
        //console.log(`after: tries = ${tries}, currentLevel = ${currentLevel}`)
    }

    var input = prompt('Want to play again? (Y/N) ');
} while (input === "Y");