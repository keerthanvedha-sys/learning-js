const descripter =Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);

console.log(Math.PI)

const chai ={
    name: 'gingerChai',
    price:250,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'price',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,"price"));
console.log('hi');

for (let [key,value]of Object.entries(chai)){
    console.log(`${key}:${value}`);
    
}
