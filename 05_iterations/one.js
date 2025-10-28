// for ..
for(let i=0;i<5;i++){
    console.log(i);
}

for(let i=0;i<5;i++){
    console.log(`Outer loop value: ${i}`);
    for(let j=0;j<5;j++){
       // console.log(`inner loop value ${j} and inner loop${i}`);
       console.log(`${i}*${j}=${i*j}`);
        
    }

}

let myArray = ["flash","batman","thor","hulk"];
for(let i =0 ;i<myArray.length;i++){
    console.log(myArray[i]);
    
}

// break and continue

for(let i =0;i<10;i++){
    if(i ==5){
        break
    console.log(`value of i is ${i}`);
    
    }
}

for(let i =0;i<10;i++){
    if(i ==5){
         continue
    console.log(`value of i is ${i}`);
   
    }else{
      console.log(`value of i is ${i}`);
    }
}