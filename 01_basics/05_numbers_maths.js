const score = 99.99;
// console.log(score);

const newScore = new Number(99.5);
// console.log(newScore)

// const newType = newScore.toString()
// console.log(typeof newType)
// console.log(newType.length)

// console.log(newScore.toFixed(2))

const otherNumber = 724.2252;
// console.log(otherNumber.toPrecision(5))

const hundreds = 1000000000000;
// console.log(hundreds.toLocaleString('en-IN'))


// ================= Maths ============================


// console.log(Math);
// console.log(Math.abs(-4));  //It changes the negative number to a positive number. (Note: It doesn't change from positive to negative)

// console.log(Math.round(98.25))
// console.log(Math.ceil(98.25))  
// console.log(Math.floor(98.25))  

// console.log(Math.min(98, 100, 5, -10))  
// console.log(Math.max(98, 100, 5, -10)) 



// console.log(Math.random())  // Gives the random value
// console.log((Math.random()*10) + 1) //It will help to avoid getting 0.

// console.log(Math.floor((Math.random()*10) + 1))

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1) + min))

console.log(Math.floor(Math.random() * (max - min + 1)+ min));
