# Project related to DOM

# project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-izknusp9?file=index.html)

# Solution code

## project 1

```javascript

console.log("khushbu")
const buttons = document.querySelectorAll('.button')
//console.log(buttons);
const body = document.querySelector("body")


buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click', function(e){
    console.log(e)
    console.log(e.target)
if(e.target.id === 'grey'){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === 'white'){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === 'blue'){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === 'yellow'){
  body.style.backgroundColor = e.target.id
}
if(e.target.id === 'purple'){
  body.style.backgroundColor = e.target.id
}
  });
});

```

## project 2 Solution
```javaScript
const form = document.querySelector('form');


//this usecase will give you empty  value

// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
  e.preventDefault();

 const height = parseInt(document.querySelector('#height').value);
 const weight = parseInt(document.querySelector('#weight').value);
 const results = document.querySelector('#results');

if(height === ''|| height < 0 || isNaN(height)){
  results.innerHTML=`Please give a valid height ${height}`;
}else if(weight === ''|| weight < 0 || isNaN(weight)){
  results.innerHTML=`Please give a valid weight ${weight}`;
}else {
 const bmi = (weight/((height*height)/10000)).toFixed(2);

 // show message
 let category = " ";
 if (bmi < 18.6) {
  category = "You are Underweight";
} else if (bmi >= 18.6 && bmi <= 24.9) {
  category = "You are in Normal Range";
} else {
  category = "You are Overweight";
}
 // show the result
 results.innerHTML = `<span>${bmi}</span><br>
 <span>${category}</span>`;
}



});
```



## project 3 Solution

```javaScript
const clock = document.getElementById('clock')
// document.querySelector('#clock')

setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString());
clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```