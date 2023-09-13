// Array

const myArray= [23, 4, 8, 20, 7, 13]  
//console.log(myArray[2]) // Indexing starts from 0.

const myArray2 = new Array(3, 6, 8)  //we can also declare this way. 


// Array methods.

// myArray.push(99);
// myArray.push(13);

// myArray.pop()  // It will remove the last element of an array.

myArray.unshift(0)  // It will add the value at the 0th index of the array. It is not an efficient way because it will change the indexing of all the value.

myArray.shift()   // It will remove the 0th index element.


// console.log(myArray.includes(4))  // If the element is in the array or not.

// console.log(myArray.indexOf(72))   // It will give the value in -ve because our array doesn't have this element but of we have then it will give the exact index.

// const newArray = myArray.join();  //Change all the element of an array into a string.

// console.log(myArray)
// console.log(newArray)
// console.log(typeof newArray)





// Slice, Splice

console.log("A", myArray)

const myn1 = myArray.slice(1, 3);
console.log(myn1)
console.log("B", myArray)

const myn2 = myArray.splice(1,3)
console.log(myn2)
console.log("c", myArray)

// Difference is slice doesn't change the original array but splice removes the selected elements from the original array and it also selects the last range element.