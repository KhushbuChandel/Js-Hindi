//var c = 300
let a = 300

if(true){
let a = 10
const b = 20
var c = 30
//console.log("INNER: ", a);
}
//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "khushbu"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

//one()

if (true) {
    const username = "khushbu"
    if (username === "khushbu"){
        const website = " youtube "
        //console.log(username + website );
    }
    //console.log(website);
}

//console.log(username);



// +++++++++++++++ example ++++++++++++++


console.log(
addone(5))
function addone(num){
    return num +1
}


adddTwo(5)
const adddTwo = function(num){
    return num +2
}

