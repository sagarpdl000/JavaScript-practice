// Immediately Invoked Function Expressions (IIFE)

// 1. Function which is Immediately executed.
// 2. Sometimes there can be a problem due to the pollution of the global scope. (Child can access the parent variable), So to remove that we use IIFE.

(function details(){
    console.log('This is IFFI')
})();  // We should end the context by putting ";" at the end

// Syntax 
// (

// )()

((name)=>{
    console.log(`Hello, ${name}`)
})("sagar")
