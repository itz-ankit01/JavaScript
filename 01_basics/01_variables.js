const accountId = 144553
let accountEmail = "abc@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  // not allowed
accountEmail = "anc@gmail.com"
accountPassword = "256555"
accountCity = "Mumbai"

console.log(accountId);
console.log(accountEmail);


/*
Prefer not to use var
cuz of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])