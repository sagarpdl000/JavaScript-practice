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



const books = [
    {
        title : 'Book 1',
        genre : 'Fiction',
        publish : 1800,
        edition : 1990
    },

    {
        title : 'Book 2',
        genre : 'Science',
        publish : 1890,
        edition : 1980
    },

    {
        title : 'Book 3',
        genre : 'Comedy',
        publish : 1990,
        edition : 2018
    },

    {
        title : 'Book 4',
        genre : 'History',
        publish : 2004,
        edition : 2022
    },

    {
        title : 'Book 5',
        genre : 'Science',
        publish : 2009,
        edition : 2019
    },
    {
        title : 'Book 6',
        genre : 'History',
        publish : 2009,
        edition : 2019
    }
]


let userBooks = books.filter( (book)=>{
        return book.genre ==='Science'
})

//     userBooks = books.filter((book)=>{
//     return book.publish >= 2000
// })


userBooks = books.filter((book)=>{

   return book.publish >= 1995 && book.genre === 'History'
    
   
})

console.log(userBooks)
