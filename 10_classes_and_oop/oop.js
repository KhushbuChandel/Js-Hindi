//Object literal means you're literally creating an object.
 /// basically your object literal have some collection inside it and these have  some properties and methods.

const user = {
    username: "Khushbu",
    loginCount: 8,
    SignedIn: true,


    getUserDetails: function(){
//console.log("Got user details from database");
 //console.log(`Username: ${this.username}`);
 console.log(this);
    }

}



//console.log(user.username); 
//console.log(user.getUserDetails());
// console.log(this);


// const promiseOne = new Promise()
// const date = new Date()
//--> now this new keyword is constructor function and it will allow you to make multiple instances from a single object literal.


//---> Constructor function always gives you a new instance.


function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

       return this
}




// const userOne = User("Khushbu", 12, true)
// const userTwo = User("Chai", 11, false)
// console.log(userOne);


// -- its will override the value of  of userOne and that will create an issue. so, we write or use a keyword new that will give you new instance.


const userOne = new User("Khushbu", 12, true)
const userTwo = new User("Chai", 11, false)
// console.log(userOne);

console.log(userOne.constructor); // --> constructor or constructor property is basically a reference of itself or the object or function                 you have created.

//console.log(userTwo);


// New Keyword  -- working mechanism

//  1 --- when you use new keyword firstly it will create empty object and that object is  known as instance.

// 2 --- because of new keyword, it will call a constructor function, now what it will do--- it will pack all the arguments and give it back to you.

// 3 --- Arguments are injected in this keyword.

// 4 --- now you will get it in the function.