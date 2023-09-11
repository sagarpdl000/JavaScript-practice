// Primitive type => Call by value
// => 7 types: String, Number, Boolean , null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(id == anotherid)



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


console.log(typeof myFunction)