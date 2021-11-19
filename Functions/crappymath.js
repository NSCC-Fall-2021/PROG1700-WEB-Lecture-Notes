
/*
var Math = {
    description: "This is an unusual object!",
    object: { a : 1, b : 2, c : 3 },
    add: function (a, b) { return a + b; },
    sub: function (a, b) { return a - b; },
    mul: function (a, b) { return a * b; },
    div: function (a, b) { return a / b; }
}
*/

var CrappyMath = require('./crappymodule.js')

var sum = CrappyMath.add( 1, 2 );
console.log(sum);