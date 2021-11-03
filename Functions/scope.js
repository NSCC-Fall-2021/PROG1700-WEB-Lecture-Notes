
var number = 123;

function changeNumber() {

    var number;

    number = 456;

    console.log(`inside 1: number = ${number}`);

    number = 789;

    console.log(`inside 2: number = ${number}`);

}

console.log(`before: number = ${number}`);
changeNumber();
console.log(`after : number = ${number}`);