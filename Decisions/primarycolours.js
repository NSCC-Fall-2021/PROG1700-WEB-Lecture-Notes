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

if (colour1 === "red") {
    if (colour2 === "yellow") {
        // red/yellow mix
        console.log("orange")
    } else {
        // blue/red mix
        console.log("violet")
    }
} else if (colour1 === "blue") {
    // blue/red mix
    console.log("violet")
} else if (colour1 === "yellow") {
    // blue/yellow mix
    console.log("green")
}