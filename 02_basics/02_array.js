const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

//++++ spread operator to combine to arrays
const all_new_heros = [...marvel_heros, ...dc_heros]  

//console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

//++++ sometimes when you datascraping and selecting the data it will come inti different formats like in nodelist, object or strings --- now to convert it into array we use ++++//

console.log(Array.isArray("Khushbu"))
console.log(Array.from("Khushbu"))
console.log(Array.from({name: "Khushbu"})) // it will give empty array

//++++ When we want to convert number of elements into array we use ++++//

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));