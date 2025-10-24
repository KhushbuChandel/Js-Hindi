// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toUTCString());

//console.log(typeof myDate);

// let myCreatedDate = new Date(2026, 0, 23)

// let myCreatedDate = new Date(2026, 0, 23, 5, 3)

let myCreatedDate = new Date("2026-01-14")
//console.log(myCreatedDate.toDateString());
//console.log(myCreatedDate.toLocaleString());


// +++++ TimeStamp +++++
// used in quizes and poles where you want to know the exact time.


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth () + 1);
console.log(newDate.getDay());


// ` ${newDate.getDay()} and the time`

 // we can customize using t LocaleString according to the requirement
newDate.toLocaleString('default', {
    weekday: "long"
 })