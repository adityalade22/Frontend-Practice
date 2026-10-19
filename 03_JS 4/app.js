// for (let i = 1; i <= 15; i+=2) {
//     console.log(i);
// }

// for (let i = 2; i <=10; i+=2) {
//     console.log(i);    
// }


//multiplication of 5:
let n = prompt("Write the Number of Table you want:");

// for(let i = 1; i<11;i++){
//     console.log(n +" * "+ i+" = "+ i*n);
// }

for(let i = 1; i<11 ; i++){
    console.log(i*n);
}


//Nested Loop:
for(let i=1; i<=3 ; i++){
    console.log(`Outer loop ${i}`);

    for (let j = 1; j <= 3; j++) {
        console.log(j);
    }
}

//for of loops
let fruits = ["apple", "banana", "pineapple", "litchi", "orange"];

for(fruit of fruits){
    console.log(fruit);
}

//nested for of loop
let heros = [  ["Iron man", "Spider Man", "Thor"], ["Superman", "Batman", "Flash"] ];

for(list of heros){
    console.log(list);
    for(hero of list){
        console.log(hero)
    }
}