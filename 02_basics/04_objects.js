//const tinderUser = new Object()  // singleton object
const tinderUser ={}//Non singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Khushbu",
            lastname: "Chandel"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4:"b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2}
//const obj3 = Object.assign(obj1, obj2)  // First method to combine the object
//const obj3 = Object.assign({}, obj1, obj2, obj4) // 2nd method to combine objects


const obj3 = {...obj1, ...obj2} // 3rd way to combine the objects
//console.log(obj3);

// one more syntax when we get values from database
const users = [
    {
     id: 1,
     email: "k@gmail.com"   
    },
     {
     id: 1,
     email: "k@gmail.com"   
    }
]

users[1].email
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// to check if your object have has that value
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructure: "Khushbu"
}

//course.courseInstructure

const {courseInstructure: instructor} = course

//console.log(courseInstructure);
console.log(instructor);

// {
//    " name": "Khushbu",
//    " coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {},
]