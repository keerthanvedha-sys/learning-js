// Immediately invoked function expressions(IIfE)

(function chai(){
    // named iife
    console.log(`DB CONNECTED`);
    
})();

((name)=>{
    console.log(`DB connected two ${name} `);
    
})('Keerthan');

