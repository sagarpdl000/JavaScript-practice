// More on array

const nepali_players = ["Kushal B","Sompal K","Rohit P","Karan K"];
const indian_players = ["Virat k","Shubhman G","Ishan K","Hardik P"];

// nepali_players.push(indian_players)  //indian players will be pushed as a single element on an array nepali_player. 
//Note!!!!! This is not a good practice.

// console.log(nepali_players);

// console.log(nepali_players[4] [1]);   

// const allPlayers = nepali_players.concat(indian_players); // This returns the new array and  merge all the element of indian_players as a different element.
// console.log(allPlayers)

//  Another way to do this

const anotherWay_allPlayers = [...nepali_players, ...indian_players] // we can add other arrays also here like we did to last array.
// console.log(anotherWay_allPlayers)

const flat_Example = [1,2,3, [4,5], 6, [7,8, [2,4]],5]  /// It spread out all the array into a single array.
const flat_Answer = flat_Example.flat(Infinity)
// console.log(flat_Answer)


// This is useful when are getting some data from somewhere and check if the data we are getting is array or not.
console.log(Array.isArray("sagar")) // To check is the thing we are getting is an element or not.

console.log(Array.from("sagarr"))  // If not we can convert it into an array.

///////////Another example of this//////// 
let score1 = 99;
let score2 = 82;
let score3 = 76;

console.log(Array.of(score1, score2, score3));  // It returns a new array from other set of elements.