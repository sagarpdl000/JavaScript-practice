const sports = ["football", "Cricket", "Boxing", "MMA"]


// Example to show for_Each doesnot return any values.
const value = sports.forEach(function(item){

    //console.log(item)
    return item;
    

})
// console.log(value)


//Filter  

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNmus = myNumbers.filter((num)=> num > 5)


const newNmus = myNumbers.filter((num)=>{
    return num > 5
})


//console.log(newNmus)

