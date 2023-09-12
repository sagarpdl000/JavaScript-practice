
//Dates in JavaScript

let dateToday = new Date();
// console.log(dateToday.toString())
// console.log(dateToday.toISOString())
// console.log(dateToday.toLocaleDateString())
// console.log(typeof dateToday)

// let myDate = new Date (2023, 9, 12);  // Month starts from 0.

let myDate = new Date ("2023-01-23"); //(yy/mm/dd format) so here month starts from 1 since it is not an array.

// console.log(myDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myDate.getTime())

let newDate = new Date();
console.log(newDate)
console.log(newDate.getDay())    //starts from 0
console.log(newDate.getMonth() +1)   //starts from 0 so adding 1 to get exact month.
console.log(newDate.getFullYear())


