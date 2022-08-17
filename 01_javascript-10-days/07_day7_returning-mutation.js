

let pets = [
    { name: 'Meowsalot', species: 'cat', age: 2 },
    { name: 'Barkalot', species: 'Dog', age: 1 },
    { name: 'Purrsloud' , species: 'cat', age: 4 },
];


// Push method is returning and mutating method becoz it returns a vlue or length or array and mutate or cange the actual array
console.log(pets.push({name: 'Puppster', species: 'Dog', age: 4}));
console.log(pets)

// There are many method from array are not the returning or mutating like map or filter

// MAP() ==> it work on each element of array but return a new array and does not mutate the actual array
console.log(pets.map(nameOnly));
function nameOnly(pet) {
    return pet.name
}

// filter()  ==> returns a new array based on condtion and it again does not mutate an array
console.log(pets.filter(onlyDog));
function onlyDog(pet) {
    return pet.species == 'Dog'
}

function onlyBabies(pet) {
    return pet.age < 3;
}

// species should be dog and it should be less than 3
console.log(pets.filter(onlyDog).filter(onlyBabies))