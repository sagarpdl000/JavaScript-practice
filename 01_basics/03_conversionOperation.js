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
// console.log(stringConversion)
// console.log(typeof stringConversion)


// ====================== Operations ==============

let value = 3;
let negValue = -value
// console.log(negValue)

// console.log(2+2);

let str1 = "Hello";
let str2 = " javaScript!";
let str3 = str1 + str2;
// console.log(str3)

// ===================

// console.log ("1" +2);
// console.log (1 +"2");
// console.log ("1" +2 + 2);
// console.log (1 +2 + "2");
// If the string is the first value then, every value is treated as string and if the string is at last then the operation at first will done first.
// All these things are confusing so make sure you know what you are doing.


let gameCounter = 100;
// gameCounter++;   =>101
++ gameCounter;   
console.log(gameCounter)




