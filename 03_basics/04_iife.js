// Immediately Invoked Function Expressions (IIFE)

// function chai (){
//     console.log(`DB CONNECTED`);
// }
// chai()


(function chai (){
    // named IIFE
    console.log(`DB CONNECTED`);
} ) ();


// ++ we can write it as arrow function +++//

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} ) ('khushbu')
