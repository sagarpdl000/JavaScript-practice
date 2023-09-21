// for loop

//Syntax

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }


for (let i = 0; i <= 10; i++ ){
    const element = i;
    if(i==7){
        // console.log("7 is my lucky number")
    }
    // console.log(element)
}

// Nested loop

for (let i = 0; i < 3; i++) {
    // console.log(`Value of outer loop: ${i}`)
     for (let j = 0 ; j < 3; j++){
        //console.log(`Value of outer loop: ${i} value of inner loop: ${j}`)

     }
    
}

// Multiplication table 

for (let i = 1; i <= 10; i++) {
   // console.log(`Table of: ${i}`)

     for (let j = 1 ; j <=10; j++){
        //console.log(`${i} * ${j} = ` + i*j)

     }
     //console.log('\n')
}


// Loop on array

myArray = ["Javascript", "C++", "Python"];
for (let index = 0; index < myArray.length; index) {
    const element = myArray[index];
   // console.log(element)
}


//break


for (let i = 1; i <= 10; i ++){

    if(i == 5){
        console.log("5 detected")
        break
    }

    console.log(`value of i is ${i}`);
}




//Continue            // Doesn't print for one time.
for (let i = 1; i <= 10; i ++){

    if(i == 5){
        console.log("5 detected")
        continue
    }

    console.log(`value of i is ${i}`);
}


