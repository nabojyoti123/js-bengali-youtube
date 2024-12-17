const accountId = 14454
let accountemail = "nabojyoti@google.com"
var accountpassword = "12345"
accountcity="hailakandi"
let accountstate;
 
// accountId =2; // not allowed
console.log(accountId);

accountemail= "vicks@google.com"
accountpassword= "22345"
accountcity= "silchar"

console.log(accountId);

/* prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountemail, accountpassword, accountcity, accountstate]);