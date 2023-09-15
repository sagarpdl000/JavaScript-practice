// Singleton, non-singleton

// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sagar"
tinderUser.city = "Kathmandu"

// console.log(tinderUser)
//console.log(Object.keys(tinderUser))  // We get the array of the keys.
//console.log(Object.values(tinderUser)) // We get the array of the values.

// To check if it has the desired key or not.
//console.log(tinderUser.hasOwnProperty('name'))  // We will get answer in boolean.


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



// ==============******Destructuring******==============


const subject = {
    subjectName : "Basics of javascript",
    teacherName : "Kanye West",
    studentEnrolled : 19
}

const {subjectName} = subject ;  // This is usefull when we have to write the same "subject.subjectName" many time. 

//console.log(subjectName)  // Now can only write subjectName.

// We can also do this if the key is too long, change the key name also.
const {teacherName: tname} = subject
//console.log(tname)



// ==============******API******==============

{
    "name" : "Sagar"
    "age" : "18"
    "GPA" : "3.64"
}
// When we call the api we get some value. This is in JSON format. Usually keys are string and values are also string.

// Some time we can also get data in arrays
//like
[
    {

    },

    {

    }
]