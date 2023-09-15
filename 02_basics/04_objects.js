// Singleton, non-singleton

// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sagar"
tinderUser.city = "Kathmandu"

// console.log(tinderUser)
console.log(Object.keys(tinderUser))  // We get the array of the keys.
console.log(Object.values(tinderUser)) // We get the array of the values.

// To check if it has the desired key or not.
console.log(tinderUser.hasOwnProperty('name'))  // We will get answer in boolean.


const user1 = {
    email: "Sagar@gmail.com",
    fullname : {
        userFullname :{
            firstname: "Sagar",
            lastname: "Poudel"
        }
    }
}
//console.log(user1.fullname.userFullname.firstname) //Acessing the objects inside an object.

//Merging the objects

const obj1 = {
    a : "1",
    b : "2"
}
const obj2 = {
    c : "3",
    d : "4"
}

//const obj3 = Object.assign( { }, obj1, obj2)  // { } acts as a target and other obj1 and obj2 act as a source.
//console.log(obj3);

const obj3 = {...obj1, ...obj2}     // We can also do like this.
// console.log(obj3);


