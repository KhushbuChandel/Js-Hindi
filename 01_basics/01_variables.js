const accountId = 1444553
let accountEmail = "khush@google.com"
var accountPassword = "12345"

//accountId = 2  // not allowed
let accountState;

accountEmail = "kc@kc.com"
accountPassword = "21212121"
accountCity ="Bengaluru"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail,accountPassword, accountCity, accountState])