// let myName = "Khushbu       "
// let myChannel = "chai       "
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.khushbu = function(){
   console.log(`khushbu is present in all objects`); 
}


Array.prototype.heykhushbu = function(){
    console.log(`Khushbu says hello`);
}

//heroPower.khushbu()
// myHeros.khushbu()
// myHeros.heykhushbu()
//heroPower.heykhushbu()


// inheritance


const User = {
    name: "chai",
    email: "chai@google.com" 
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport  = {
   makeAssignment: 'JS assignment',
   fullTime: true,
   __proto__: TeachingSupport
}

Teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);

}

anotherUsername.trueLength()
"khushbu".trueLength()
"iceTea".trueLength()