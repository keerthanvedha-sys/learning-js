const name = "KEERTHAN"
const repoCount=50
console.log(name+repoCount+"nice");
// use string interpolation
console.log(`hello my name is ${name} and my repo count is ${repoCount}`)
const gameName = new String ('keerthanvv')
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newstring = gameName.substring(1,4) //0-3 included
console.log(newstring);
const anotherString =gameName.slice(1,4)
console.log(anotherString);
const newStringOne = "   Keerthan  "
console.log(newStringOne);
console.log(newStringOne.trim());
const url ="https://keerthanvv%20com"
console.log(url.replace('%20','-'));
console.log(url.includes("keerthan"));
console.log("learn more on mdn");

