/*
  Create a program that will allow the user to enter in two primary colours 
  and then output the mix of the two colours.  
  e.g. red + yellow = orange, blue + red = violet
*/

// ask user for two primary colours
var prompt = require("prompt-sync")()
var colour1 = prompt("Enter the first colour: ")
var colour2 = prompt("Enter the second colour: ")

// output mixed colour based on input
// red/yellow = orange, blue/red = violet, blue/yellow = green

// red/yellow mix
if (colour1 === "red" && colour2 === "yellow") {
    console.log("orange")
}

// blue/red mix
if (colour1 === "blue" && colour2 === "red") {
    console.log("violet")
}

// blue/yellow mix
if (colour1 === "blue" && colour2 === "yellow") {
    console.log("green")
}