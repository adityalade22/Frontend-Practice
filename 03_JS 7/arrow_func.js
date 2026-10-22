//Arrow function:
const sum = (a, b) =>{
    console.log(a+b);
}

//implisit arrow function:
const squaree = n =>(n*n); 

//question:
let square = (n) => {
    return n*n;
}
console.log(square(5))

//array function for setInterval func:
let num = 0;
let id = setInterval(() => {
    console.log("Hello World");
    num ++;
    if(num == 5){
        clearInterval(id);
    }
}, 2000);