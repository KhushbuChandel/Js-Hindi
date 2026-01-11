class User {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
   static createId(){
        return `123`
    }
}
const khushbu = new User("khushbu")
//console.log(khushbu.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher ("iphone", "iphone@gmail.com")
//iphone.logMe();
console.log(iphone.createId());