// Why do we use objects
let catName = "Fluffy";
let catAge = 4;
function meaw() {
    console.log("Meoooowwwww")
}

// Here these theree variable and function are related to each other so how can we make it one variable having related fnction and variable

let cat = {
    catName: "Fluffy",
    catAge: 4,
    // Above things are properties of cat 
    meaw() { // meaw is method
        console.log("Meoooowwww")
    }
}

console.log(cat.catName);
cat.meaw()

// Nested Object
let food = {
    type: "Veg",
    favFood: {
        veg: "Paneer",
        nonVeg: "Meat"
    }
}
console.log(food.favFood.veg)
