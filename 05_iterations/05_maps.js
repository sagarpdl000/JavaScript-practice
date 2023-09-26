//Maps



const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Add 10 in each number
const nemNums = myNumbers.map((num)=>{
    return num+10
})

//console.log(nemNums)








// Chaining

const newNums = myNumbers
                .map((num) => num*10)
                .map((num)=> num+1)
                .filter((num)=> num > 40)



// console.log(newNums)



// Reduce

const myNum = [1, 2, 3, 20, 45, 22, 7 ,13]
 

const myTotal = myNum.reduce((acc, currentVal)=>{

   // console.log(`The acc value is: ${acc} and current value is ${currentVal}`)
    return acc + currentVal

},0)
//console.log(myTotal)



// Reduce example for shopping cart

const shoppingCart = [

    {
        itemName: "Mac book",
        price : 2200
    },
    {
        itemName: "Earpod",
        price : 200
    },
    {
        itemName: "Headphone",
        price : 750
    },
    {
        itemName: "Laptop Bag",
        price : 100
    }

]

const myTotal2 = shoppingCart.reduce ((acc, item)=>{

    return acc + item.price

},0)

console.log(myTotal2)