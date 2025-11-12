// for each

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item) {
//    console.log(item); 
// })

// for each with arrow function
// coding.forEach( (item) => {
//     console.log(item)
// })



// printMe function
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)


// coding.forEach( (item, index, arr)=> {
//   console.log(item, index, arr)
// } )



const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"

    },

    {
        languageName: "python",
        languageFileName: "py"

    },

    {
        languageName: "java",
        languageFileName: "java"

    },



]
myCoding.forEach( (item) => {
    
    console.log(item.languageName);
})