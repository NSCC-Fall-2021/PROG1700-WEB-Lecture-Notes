
var prompt = require("prompt-sync")()

// ask a user for their password
var password = ""
while (password === "") {
    password = prompt("Enter a password: ")
}
console.log("Yeah! You finally typed it in!")