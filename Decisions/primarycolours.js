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

if ((colour1 === "red" && colour2 === "yellow") ||
    (colour1 === "yellow" && colour2 === "red")) {
    // red/yellow mix
    console.log("orange")
} else if ((colour1 === "blue" && colour2 === "red") ||
    (colour1 === "red" && colour2 === "blue")) {
    // blue/red mix
    console.log("violet")
} else if ((colour1 === "blue" && colour2 === "yellow") ||
    (colour1 === "yellow" && colour2 === "blue")) {
    // blue/yellow mix
    console.log("green")
}