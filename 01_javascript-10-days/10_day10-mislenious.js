// Anonymous FUntion

let user = {
    name: 'John',
    drive: ()=> {
        console.log(this)
    }
}
user.drive();

let myFunction = ()=> {
    console.log(this)
}
myFunction()
