// variable scope
var globalVariable = "global"
if (globalVariable === "global") {
    var localVariable = "local"
}
var localVariable = "local is now global"


console.log(globalVariable)
console.log(localVariable)

