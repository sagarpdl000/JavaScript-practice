function myName(){
    console.log("S")
    console.log("A")
    console.log("G")
    console.log("A")
    console.log("R")
}

// myName();

 function sum(num1, num2){       //Parameters
    
    console.log(num1+num2)

 }

  //    sum(3,9)   //Arguments


  function anotherSum(num1, num2){
   // let totalSum = num1 + num2;
   //  return totalSum;

   return num1 + num2   // We can also do this and is more efficient


    console.log("Sagar")  // This will never be executed because code after the return statement will never be executed.

  }

  const totalSum = anotherSum(9,70)
  // console.log(totalSum)


  function userLoggedInMessage(username){

    if (username === undefined){    //if(!username) we can also write like this.
        console.log("Please enter the username.")
        return;
    }

    return (`${username} is logged In`)

  }

  //console.log(userLoggedInMessage("sagar"));
  console.log(userLoggedInMessage());


