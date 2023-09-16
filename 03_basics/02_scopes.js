//Scopes

let a = 200000000;
// var b = 30;
// const c = 40;

var c = 40  //Global scope   It can be available inside block.

if(true){
    let a = 20;      //Block scope     It shouldn't be available outside block.
   // console.log("Inner: ",a)    // This a will give the value of the a which is defined inside the scope only.
    const b = 30;       //Block scope
    // var c = 40;         //Block scope 
    
    // Var will be available outside the block also so, we should avoid it.

}

// console.log("Outer: ",a)  //This "a" will give the value of "a" which is defined outside the scope only.


// console.log(a)
// console.log(b)
//console.log(c)  



//==========****Nested scope==========****

function one(){
    const firstName = "Aubrey"
    
    function two(){
        const middleName = "Drake"
        console.log(firstName);
    }
    //console.log(middleName); This is outside the scope of the function Two() so this is not allowded.
    two();
}

one()




