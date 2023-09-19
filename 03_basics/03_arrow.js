 const user = {
    name: "Sagar",
    age: 18,
    welcomeMessage : function(){
        console.log(` Welcome ${this.name}!`);
        console.log(this);
    }
 }

//  user.welcomeMessage()
//  user.name = "Sagarika";
//  user.welcomeMessage()

//console.log(this)    // this will give the empty object because there is no context in global (node environment).


// const student = function(){
//     let username = "Sagar";
//     console.log(this.username) // We cannot use this inside a function. It will give undefined.
// }

//student()

// const student = () => {
//     let username = "Sagar";
//     console.log(this.username);
//     // We cannot use this inside an arrow function also. It will give undefined.
// }

// student()


// ========Arrow function==========

 const sumFunction = (sum1,sum2)=> {
    return sum1 + sum2

  }

  console.log(sumFunction(3,4))



  // Implicit return
 const sumFun = (sum1,sum2)=>  (sum1 + sum2)


  console.log(sumFun(5,4))