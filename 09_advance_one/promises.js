   // Promise creation
const promiseOne = new Promise(function(resolve, reject){
    // Do an asyn  task
    // DB calls, cryptography, network
    setTimeout(function(){
      console.log('Async task is complete'); 
      resolve()
    }, 1000)
})
 // Promise consumption
 promiseOne.then(function(){
    console.log("Promise consumed");
 })


 // other way to create promise

 new Promise(function(resolve, reject){
   setTimeout(function(){
      console.log("Async task 2");
      resolve()
   },1000)
 }).then(function(){
   console.log("Async 2 resolved");
 })


 // promise three

 const promiseThree = new Promise(function(resolve,reject){
   setTimeout(function(){
    resolve({username: "Chai", email: "chai@example.com"})
   },1000)
 })
 promiseThree.then(function(user){
     console.log(user);
 })

  // Promise Four
 const promiseFour = new Promise(function(resolve, reject){
  setTimeout(function(){
   let error = true
   if (!error){
      resolve({username: "Khushbu", password:"123"})
   }else{
      reject('ERROR: Something went wrong')
   }
  },1000)
 })

 promiseFour.then((user) => {
    console.log(user);
    return user.username
 }).then((username)=>{
  console.log(username);
 }).catch(function(error){
   console.log(error);
 }).finally(() => console.log("The promise is either resolved or rejected"))


 // Promise five


 const promiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
      let error = true
      if (!error){
         resolve({username: "javascript", password: "123"})
      }else {
         reject('ERROR: JS went wrong')
      }
   }, 1000)
 });

 async function consumePromiseFive(){
       //++++ it only works when we have error = false, only then it will give you a right output/
   // const response = await promiseFive
   // console.log(response);
   try {
      const response = await promiseFive
   } catch (error) {
      console.log(error);
   }
 }
 consumePromiseFive()


//  async function getAllUsers() {

// //    const response = await fetch('https://jsonplaceholder.typicode.com/users')
// //   const data = response.json()
// //   console.log(data);
//  try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     //console.log(response);

//     const data = await response.json()
//     console.log(data);
//  } catch (error) {
//    console.log("E: ", error);
//  }
//  }
 //getAllUsers()

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response)=>{
   return response.json()
 })
 .then((data)=> {
   console.log(data);
 })
 .catch((error) => console.log(error))