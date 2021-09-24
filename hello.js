console.log("Hello World!")

// user input

// use an external library to get synchronous input from the user
var prompt = require("prompt-sync")()

// prompt user for input
var name = prompt("Enter your name: ")

// use the inputted value
console.log(`Hi, ${name}!`)