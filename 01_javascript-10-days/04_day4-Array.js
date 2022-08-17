// Array: having collection

let favNumber = 1;
let favNumbers = [1,5,7,0];   //numbers of array
let favWords = ['Red','Cars'];   //String of array
let myArrayHaveObj = [
    {
        obj: "Array can have object as well"
    }
]
let ArrayCanHaveAnyDatatype = [
    "String",
    12,
    {
        obj: "OBJECT"
    }
]


// Adding into array
favWords.push("Home");
console.log(favWords)

// String also can be act as array
let myString = "This is me";
console.log(myString[1]);


// Removing item from array
favNumbers.splice(0,1);
console.log(favNumbers)