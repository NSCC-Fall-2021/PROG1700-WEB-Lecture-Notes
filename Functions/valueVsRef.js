
function passByValue( intValue, floatValue, booleanValue, stringValue ) {
    intValue++;
    floatValue *= Math.PI;
    booleanValue = !booleanValue;
    stringValue = "a different string!";
}

function passByRef( array, object ) {
    array.push(999);
    object.orange = 'orange';
}

var i = 10;
var f = 1.0;
var b = false;
var s = "a string";

console.log(`before: i = ${i}, f = ${f}, b = ${b}, s = ${s}`);
passByValue( i, f, b, s );
console.log(`after : i = ${i}, f = ${f}, b = ${b}, s = ${s}`);

var a = [1, 2, 3, 4, 5]
var o = { apple: 'red', banana: 'yellow' }

console.log(`before: a = [${a}], o = ${JSON.stringify(o)}`);
passByRef( a, o );
console.log(`after : a = [${a}], o = ${JSON.stringify(o)}`);
