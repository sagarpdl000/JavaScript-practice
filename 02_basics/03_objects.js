

// Object literals
const mySym = Symbol("key1");

const user1 = {
    name: "Felix",     //name is the key and "felis" is the value.
    "full Name" : "Arvid Ulf Kjellberg",
    age: 33,
    country: "Sweden",
    email : "Pewdiepie@gmail.com",
    lastLogin: ["Sunday", "Thursday", "Friday"],
    isLoggedIn: false, 
    [mySym] : "key12"  //Way of using symbol in an object. Define the symbol first.
}

// accessing the objects
//console.log(user1);

//console.log(user1.name);     // One way

//console.log(user1["email"])  // Another way  // email is stored as a string behind the scene so we have to call them as a string.
//This way is more preferable  //console.log(user1["full Name"])

//console.log(user1[mySym])
//console.log(typeof mySym)  //Way to access symbol and type check.

// Change the value of an object

// user1.email = "Pewdiepie@yahoo.com"

//To lock(freeze) the value so that no one can change it.

// Object.freeze(user1)
//user1.email = "Pewdiepie@yahoo.com"  // It will not show any error but also it will not change the value.
// console.log(user1["email"])

user1.greeting = function(){
    console.log("Hello user1!")
}

// user1.greetingTwo = function(){
//     console.log(`Hello user1, ${this.name}');
// }
user1.greetingTwo = function(){
    console.log(`Hello user1 , ${this.name}`);
}

console.log(user1.greeting());
console.log(user1.greetingTwo());
