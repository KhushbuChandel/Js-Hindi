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

 