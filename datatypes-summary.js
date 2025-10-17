// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

//const bigNumber = 23457534345433333334n
// Non- Primitive (Reference)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj={
    name:"Khush",
    age:22,
}

const myFunction = function(){
   console.log("Hello world"); 
}


console.log(typeof bigNumber);
console.log(typeof myFunction );

console.log(typeof scoreValue );

console.log(typeof userEmail );

console.log(typeof outsideTemp );


// ++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename = "Khushdotcom"

let anothername = myYoutubename
anothername = "Chandeldot"

console.log(myYoutubename);

console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"

}

let userTwo = userOne

userTwo.email = "khush@google.com"

console.log(userOne.email);
console.log(userTwo.email);