console.log("Hello Aditya");

setTimeout( () =>{
    console.log("System started !");
}, 3000)

console.log("System starting ...");


//setInterval(() => { 
//}, interval);

let id = setInterval( () =>{
    console.log("welcome"); // print welcome after every 5sec
}, 5000);

clearInterval(id);      // to stop interval function

