//Objects are declared as literal and  constructor

// singleton -:when we make it with constructor 



//Object.create // object is made through constructure method 


// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Khushbu",
    "full name": "Khushbu Chandel",
    [mySym]: "mykey1",
    age:23,
    location: "Himachal Pradesh",
    email:"Khushbu@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
//console.log(JsUser.mySym) // this will give string which is not correct
//console.log(typeof JsUser.mySym)
// console.log( JsUser[mySym])


JsUser.email = "Khushbu@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "Khushbu@microsoft.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js use, ${this.name}`)
}

console.log(JsUser.greeting());
//console.log(JsUser.greeting);
console.log(JsUser.greetingTwo())

