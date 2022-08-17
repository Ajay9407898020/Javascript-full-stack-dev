// Scopping: Directly related to variable and the
//  defination is where the varaible has access to 

let myName = "Ajay";

function amazingFunction() {
    let myName = "Vijay";
    console.log(myName);  //myName is inside the function so it displyed otherwise it will look in enclosing scope
}
amazingFunction()
console.log(myName)
