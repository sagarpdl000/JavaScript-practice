const name = "Justin Bieber"
age = 29;
// console.log(name + "'s age is " +age)  //concatenation
// This is abit outdated and we should avoid writing like this.

// console.log(`${name} is ${age} years old.`) // Tis is more readable and clean.

const anotherName = new String("Harry-Styles");
// console.log(anotherName)
//console.log(anotherName[6])
// console.log(anotherName.length)
// console.log(anotherName.toLowerCase())
// console.log(anotherName.charAt(2))

const newString = anotherName.substring(2,6)
// console.log(newString)

const newStringOne = "     Camila cabello  "
// console.log(newStringOne)
// console.log(newStringOne.trim())

const url = "https://kushal.com/kushal20%bhurtel"
// console.log(url.replace('bhurtel', 'malla'))
// console.log(url.includes('kushal'))
// console.log(url.includes('malla'))


const anotherName2 = anotherName.split("-")
console.log(anotherName2)