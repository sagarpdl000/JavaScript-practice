// for of

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
   // console.log(num)
}

const greeting = "Hello Javascript!"
for (const greet of greeting) {
    //console.log(greet)
}


// Map      //It holds unique values in the original order
const map = new Map();
map.set('np', 'Nepal')
map.set('au', 'Australia')
map.set('ca', 'Canada')

//console.log(map)

for (const [key, value] of map) {     //To get key and value separately.
   // console.log(key, '=>', value)
}



// This is the example to show objects are not iterable using for of.
const student = {
    Name : "Sagar",
    Age : 18,
    Address : "New york"
}

// for (const [details] of student) {
//     console.log(details) // This is the example to show objects are not iterable using for of.
// }











// For in loop     // To iterate objects

for (const details in student) {
    //console.log(`${details} is ${student[details]}.`);
}


// for in for array

for (const key in arr) {
   //console.log(key, arr[key])
}









// for each 

const sports = ["football", "Cricket", "Boxing", "MMA"]

// sports.forEach (function(sport){
//     console.log(`The sport is ${sport}`)
// })


sports.forEach( (item, index, arr)=>{
   // console.log(item, index , arr)
})




// Accessing Objects inside array
const ProgrammingLanguage = [

    {
        language : "Javascript",
        fileName: "Js"
    },
    {
        language : "Python",
        fileName: "py"
    },
    {
        language : "Java",
        fileName: "Java"
    }

]

ProgrammingLanguage.forEach((item)=>{
    console.log(item.fileName);
} )






