function sayMyName(){
    console.log("K");
    console.log("H");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("B");
    console.log("U");

}

//sayMyName()


// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//    console.log("Khushbu")
//     return result
    return number1 + number2
    
}


const result = addTwoNumbers(3, 5)

//console.log("Result:", result);



function loginUserMessage(username = "Sam"){
    //if(username === undefined)
    if(!username){

    console.log("Please enter a username");
    return
    }
    return`${username} just logged in`
}

//console.log(loginUserMessage("Khushbu"))
//console.log(loginUserMessage(""))
//console.log(loginUserMessage())



// another way to pass parameters like in shopping cart  where we don't know about how many arguments we will get we use spread operator in that case we write the function as

function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500)
)