const time = document.querySelector('#clock');

setInterval(function(){
  let date = new Date();
//console.log(date.toLocaleTimeString);
time.innerHTML =date.toLocaleTimeString();
},1000)
