const accountId = 144553
let accountEmail = "keerthan@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
 
// accountId = 2 // not allowed
/* avoid using var
beacuse of issue in block scope and functional scope
*/
accountEmail= "abc@google.com"
accountPassword="2112121"
accountCity="Bengaluru"
console.log(accountEmail);
console.table([accountEmail,accountPassword,accountCity]);