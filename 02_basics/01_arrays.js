//arrays
const myArr=[0,1,2,6,4,5]
const myHeroes = ["ironman","Thor"]
console.log(myArr[0]);
const myArr2 = new Array(1,2,3)
console.log(myArr[3]);

// Array methods
myArr.push(8)  //adds new elements
console.log(myArr);
myArr.pop()  // removes last element
console.log(myArr);

myArr.unshift(9)  // adds elemnt at the first position of array
console.log(myArr);
myArr.shift()  // removes element from the first postion of the array
console.log(myArr);



console.log(myArr.includes(9));
console.log(myArr.indexOf(2));
  

const newArr = myArr.join()
console.log(myArr);
console.log(newArr);

// slice,splice

console.log("A",myArr);
const myn1 = myArr.slice(1,3)
console.log( myn1);
console.log("B",myArr);

//splice
const myn2 =myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);




