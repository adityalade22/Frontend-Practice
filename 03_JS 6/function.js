function nameprint(){
    console.log("Aditya Lade");
    console.log("Namdev Lade");
    console.log("Avinash Lade");
    console.log("Rekha Lade");
}

function print1to5(){
    for (let i = 1; i < 6; i++) {
        console.log(i);
    }
}

// nameprint();
// print1to5();

//question 1 print poem:
function poem(){
    console.log("Twinkle, twinkle, little star");
    console.log("how I wonder what you are");
    console.log("Up above the world so high");
    console.log("Twinkle, twinkle, little star");
    console.log("how I wonder what you are");
}

// poem();

//question 2 roll dice:
function numGenerator(){
    let num = Math.floor(Math.random()*6)+1;
    console.log(num);
}

// numGenerator();


//question 3 Average of 3 numbers:
function Average(x,y,z){
    let result = (x+y+z)/3;
    console.log(result);
}

// Average(10, 15, 20);

//question 4 print multiplication table:
function table(a){
    for(let i = 1; i<=10; i++){
        let result=a*i;
        console.log(`${a} * ${i} = ${result}`);
    }
}

// table(5)

//question 5 return sum of 1 to n:
function sum(n){
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result +=i;
    }
    return result
}

console.log(sum(3));

//question 6 return a concanitated string:
function str(str1, str2){
    let concat=str1 +str2;
    return concat;
}

console.log(str("aditya", "lade"));

//funtion experssion:
let FriendName = function(FirstName, LastName){
    let FullName = FirstName +" "+ LastName;
    console.log(FullName);
}
FriendName("Aditya", "Lade");

//higher order funtion:
function multipleGreet(func, n){
    for(let i = 1 ; i <= n; i++){
        func();
    }
}
function greet(){
    console.log("Hello");
}
multipleGreet(greet, 5);
