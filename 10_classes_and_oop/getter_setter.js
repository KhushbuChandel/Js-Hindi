class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
     get email(){
        return this._email.toUpperCase()
     }
     set email(value){
        this._email = value
     }


    get password(){
       // return this._password.toUpperCase()
       return `${this._password}khushbu`
    }
    set password(value){
        this._password = value

    }
}
const khushbu = new User("k@khushbu.ai", "abc")
// console.log(khushbu.password);
console.log(khushbu.email);