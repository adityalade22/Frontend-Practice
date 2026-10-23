//array method:
let arr1 = [1, 2, 3, 4, 5];

// let print = function(el){
//     console.log(el);
// }
// arr1.forEach(print);

arr1.forEach( (arr1)=>{
    console.log(arr1);
});

let arr2 = [
    {
        name: "Aditya",
        marks: 92
    },
    {
        name: "sumit",
        marks: 95
    },
    {
        name: "rekha",
        marks: 99
    }
]

arr2.forEach( (second)=>{
    console.log(second.marks)
})

//map and filter method:
let num = [1, 2, 3, 4, 5, 6, 7, 11, 15, 12, 17];

let arr = num.map( (el)=>{
    return el/10;
}) 
console.log(arr);

let even = num.filter( (el)=>{
    return el % 2==0;
})
console.log(even);

//every and some method:
console.log("every method");
let array = [2, 4, 6, 8];
let answer =array.every( (el) =>el%2==0);
console.log(answer);

console.log("some method");
let array1 = [1, 2, 4, 6, 8, 15];   //some value present say true
let result =array.some( (el) =>el%2==0);
console.log(result);


//defalut parameter:
console.log("Defalut parameter");
function sum(a, b= 10){
    return a+b;
}

console.log(sum(5));  //give 15 cuz b =10

//spread (...) method:
console.log("Spread Method");
let str = "I love You";
console.log(...str);
//some examples:
let arrNum = [1, 2, 15, 10, 4, 8, 2, 3, 7, 2, 15, 10, 4, 8];
console.log(Math.min(...arrNum));

let newArr = [...arrNum];
console.log(newArr);
let string = [..."hello"];
console.log(string);
let odd = [1, 3, 5, 7, 9];
let evenNum = [2, 4, 6, 8, 10];
let allnum =[...odd, ...even]

let data = {
    userName: "aditya Lade",
    password: "Adityal22@",
}

let dataCopy = {...data, id: 8551}



//rest method:
function sum(...arg) {
    console.log(arg);
    return arg.reduce( (final, initial) => final +initial);
}

//destrcturing:
let names = ["shravani", "aditya", "anuj", "ayush", "Sumit" ];
let [bestfriend, myName, ...other] = names;

let stundent = {
    name: "Aditya",
    age: 19,
    section: "A",
    branch: "AIML",
    college: "TGPCET",
    location: "Owara",
    email: "adityalade22@gmail.com",
    mobile: 8551061351
};

let {email: username, mobile: password} = stundent;