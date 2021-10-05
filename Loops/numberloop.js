var prompt = require('prompt-sync')()

// ask the user to type in numbers until they are done
var num = 0
var end = ""
while (end != "Y") {
    end = prompt("Enter 'Y' to enter a number: ")
    if (end == "Y") {
        num = prompt("Enter a number: ")
        end = ""
    }
}