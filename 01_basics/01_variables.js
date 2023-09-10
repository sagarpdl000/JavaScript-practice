const userId = 12345
let userEmail = "sagar@gmail.com"
var userPassword = "1234567"  /*we don't use var anymore due to block and functional scope problem.*/
userCity = "Kathmandu"  /* it allows us to declare variables without let/var but we shouldn't do it. */
let userState;  /* We haven't assigned anyvalue there so the value will be printed undefined*/


// userId = 5  we cannot change the value of constant variable.
userEmail = "pdl@gmail.com"
userPassword = "222"
userCity = "Chitwan"

console.log(userId);

console.table([userId, userEmail,userPassword, userCity, userState])