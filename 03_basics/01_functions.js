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
  //console.log(userLoggedInMessage());


 /// Situations where we don't know how many arguments we will get, like in shopping cart.
 
 function cartPriceCalculation(...num1){  // by putting ... it will return the arrays of arguments and we can do operation on it.  
    
    //function cartPriceCalculation(val1, val2, ...num1)  it will return  [300,4] because 3 is assigned to val1, 100 is assigned to val2 and rest will be in array.

    return num1;

 }
 //console.log(cartPriceCalculation(3, 100, 300,4))

//Passing object in function

const userDetails = {
    name : "Tom holland",
    product: "Camara",
    price : 3000
}

function handleObject(Details){
    console.log(`${Details.name} bought ${Details.product} at the price of ${Details.price}.`)
}

// handleObject(userDetails);

//Passing array in function

const array = [200, 300, 63, 78, 90]

function arrayCalc (arr){
        console.log(arr[1])
}

arrayCalc(array)

