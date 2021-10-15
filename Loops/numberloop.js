var prompt = require('prompt-sync')()

// ask the user to type in numbers until they are done
do {
    var num = prompt("Enter a number: ")
    var end = prompt("Enter 'Y' to enter a number: ")
} while (end == "Y")