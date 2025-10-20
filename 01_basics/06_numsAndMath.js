const score =400
console.log(score);
const balance = new Number(100)
console.log(balance);
balance.toString();
console.log(balance.length);
console.log(balance.toFixed(1));
const otherNumber =123.8966
console.log(otherNumber.toPrecision(4));
const hundreds =1000000
console.log(hundreds.toLocaleString('en-In'));
// ++++++++++++++++++++++MATHS++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2));
console.log(Math.floor(5.6));
console.log(Math.sqrt(9));
console.log(Math.min(4,8,9,6,4,2));
console.log(Math.max(2,4,6,8,4,2));
console.log((Math.random()*10)+1);
// formula to find random numbers of specific range 
const min=10
const max =20
console.log(Math.floor(Math.random()*(max-min+1))+min)