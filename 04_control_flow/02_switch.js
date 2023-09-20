// Switch case statement syntax


// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


const month = 4;

switch (month) {
    case 1:
        console.log("The month is January")
        break;
    case 2:
        console.log("The month is February")
        break;
    case 3:
        console.log("The month is March")
        break;
    case 4:
        console.log("The month is April")
        break;     // If we dont put break here, it will execute all the code from here except default.
    case 5:
        console.log("The month is May")
        break;

    default:
        console.log("Please enter the number less than 4.")
        break;
}