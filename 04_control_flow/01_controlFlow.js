//if

if (true){
    // This code inside the scope will be executed.
}

if (false){
    // This code inside the scope will not be executed.
}

// if (2==2){
//     console.log("Hello javascript!")
// }

// <, >, <=, >=, ==, !=, === (It also check the type), !==





// const temperature = 15;
// if (temperature <=15){
//     console.log("It is cold today.")
// }

// else{
//     console.log("It is hot today.")
// }


// Implicit scope

//const balance  = 3000000;

//if (balance > 2500000) console.log("That's great.")




//Nested if else

// const balance  = 1100;

// if (balance < 500){
//     console.log("less than 500");
// }

// else if (balance < 750){
//     console.log("less than 750");
// }

// else{
//     console.log("less than 1200")
// }


const userLoggedIn = true
const haveSufficientBalance = false
const LoggedInFromGoogle = true;
const LoggedInFromEmail = false;

if (userLoggedIn && haveSufficientBalance){   //AND
    console.log("You can purchase the book")
}
else{
    console.log("You can't purchase the book")
}


if (LoggedInFromEmail || LoggedInFromGoogle){  //OR
    console.log("You are logged in.")
}
else{
    console.log("You are not logged in.")
}










