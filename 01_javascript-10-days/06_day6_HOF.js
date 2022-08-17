// Higher Order Function: A function can 
// Accept function as a argument or
//  Rturns a function 


// 1. Funtion returns a function
function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier;
    }
}

let doubleMe = createMultiplier(2);
let tripleMe = createMultiplier(3);
let quadrupleMe = createMultiplier(4);

console.log(doubleMe(4));   // 4 * 2
console.log(tripleMe(4));   // 4 * 3
console.log(quadrupleMe(4));// 4 * 4


// Funtion that takes function as an argument
let favColors = [ 'red', 'orange', 'green', 'yellow' ];
// ForEach can take function as a argument so it is HOF
favColors.forEach(saySomethingAboutColor);

function saySomethingAboutColor(color) {
    console.log("This " + color + " color Is Greate!!");
}