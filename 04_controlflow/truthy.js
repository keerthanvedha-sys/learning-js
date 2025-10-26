const userEmail = "keerthan@gmail.com"

if(userEmail){
    console.log("Got user email");
}else {
    console.log("Don't have user email");
}

//falsy values
// false, 0, -0, BigInt 0n, " ",null, undefined, NaN

//truthy values
// "0", "false", " ",[],{},function(){}

// Nullish Coalescing Operator(??):null undefined
let val1;
//val1 = 5 ?? 10
val1 = null ?? 10
console.log(val1);

// Terniary Operator

const iceTeaPrice =100
iceTeaPrice >=80 ? console.log("greater than 80"): console.log("more than 80");





