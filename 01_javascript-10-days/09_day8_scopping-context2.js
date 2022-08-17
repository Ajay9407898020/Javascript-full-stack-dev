let user = {
    name: "John",
    lname: "Doe",
    driveCar() {
        function iAmFunctionNotMethod() {
            console.log(this)
        }
        iAmFunctionNotMethod()
        console.log(this.name + " " + this.lname + " Driving a car ")
    }
}

user.driveCar()

// If we want a function or global function should be execute as a property of object
function breath() {
    console.log(this.name + " " + this.lname + " breath In and exhaled")
}

breath.call(user) // Here call() inside call pointing this keyword to user object