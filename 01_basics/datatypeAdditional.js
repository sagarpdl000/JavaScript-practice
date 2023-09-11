// Primitive type => Call by value
// => 7 types: String, Number, Boolean , null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id == anotherid)



// Non-primitive => Reference
//  Array, Objects, Functions


const singers = ["Kanye", "Drake", "21Savage", "Jcole"];

let myObj= {
    name: "Sagar",
    age: 18
}

const myFunction = function(){
    console.log("Hello JavaScript!")
}


// console.log(typeof myFunction)

// =======================Stack and heap memory============

// Stack (primitive) ,Heap (Non-primitive)

let myRealName = "Sagar"
let myName = myRealName; //This gets the copy of myRealName not the original value.
myName = "hero";

// console.log(myRealName)
// console.log(myName)

let user1 = {
    name: "Sagar",
    email: "Sagar123@gmail.com"
}

let user2 = user1;

user2.email = "Pdlsgr62@gmail.com"

console.log(user1.email)
console.log(user2.email)

// Since this is an object which is stored in heap, when we assign the value of user2 as user1, it will assign the original value not the copy so, when we change the value of email in user2, the value of email in user1 is also changed.