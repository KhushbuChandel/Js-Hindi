const user = {
    username: "khushbu",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);



// function one(){
//     console.log(this);
// }
// one()

// function two(){
//     let username = "khushbu"
//     console.log(this.username);
// }
// two()



// const chai = function (){
//    let username = "khushbu"
//    console.log(this.username); 
// }

// chai()


//+++ Arrow function+++//

// const chai =  () => {
//    let username = "khushbu"
//    //console.log(this.username);
//    console.log(this); 
// }

// chai()


///+++ Explicitly return ++++///

// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }

// console.log(addTwo(3,4))

//++++ Implicit return++++//
//const addTwo =(num1, num2) => num1 + num2

//const addTwo =(num1, num2) => (num1 + num2)


///++ Object return +++///

const addTwo =(num1, num2) => ({username: "Khushbu"})



console.log(addTwo(3,4))


//const myArray = [2, 5, 3, 7, 8]

//myArray.forEach()