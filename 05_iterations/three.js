// higher order array loops
// for of


const arr =[1,2,3,4,5]

for(const num of arr){
    console.log(num);
    
}

const greetings = "Hello world"
for(const greet of greetings){
    console.log(greet);
    
}

//Maps (it stores unique value .it removes duplicate value)

const map =new Map()
map.set('USA',"United States of America")
map.set('IN',"India")
map.set('Fr',"France")
console.log(map);

for(const [key,value] of map){
    console.log(key, ':',value);
    
}




 