const score  = 400 
console.log(score);

const balence = new Number(100)
console.log(balence);

console.log(balence.toString().length);
console.log(balence.toFixed(2))//to make the value float how much to make

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));//total value to display also include point

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//value to make readable for counting as money..

console.log(Math);
console.log(Math.abs(-4));//make values positive
console.log(Math.round(4.6));//make round off
console.log(Math.ceil(4.2));//make value round up upper one
console.log(Math.floor(4.9));//make round up lover one
console.log(Math.min(4, 3, 6, 8));//find minimum values
console.log(Math.max(4, 3, 6, 8));//find maximum values

console.log(Math.random());//random number from 0 to 1
console.log((Math.random()*10) + 1);//make the value according to requirement by multiplying with 10 or the required num
console.log(Math.floor(Math.random()*10) + 1);//same as above

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

