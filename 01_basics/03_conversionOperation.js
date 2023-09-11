let score = "83abc"
// console.log(typeof score);
// console.log(typeof(score));

let typeConverstion = Number(score)
// console.log(typeof(typeConverstion)); // Here it will convert the type but we have "abc" also in SCORE so, we should be carefull of that.
// console.log(typeConverstion); //This will give NaN.

// Let score = null => Now this will give value 0 if we will try to convert, and it can be a problem. Example. In case of temperature If we get the value 0 then It will be the mistake.

// "83" => 83
// "83abc" => NaN
// true => 1; false => 0;

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

let isNumber = 33;
let stringConversion = String(isNumber);
console.log(stringConversion)
console.log(typeof stringConversion)







