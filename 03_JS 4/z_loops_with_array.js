// let fruits = ["Apple", "Banana", "Pineapple", "litchi", "orange"];

// console.log("Asending");
// for (let i = 0; i < fruits.length; i++) {
//     console.log(i, fruits[i]);
// }

// console.log("Desending");
// for (let i =(fruits.length-1); i >=0; i--) {
//     console.log(i, fruits[i]);
// }


// let heros = [  ["Iron man", "Spider Man", "Thor"], ["Superman", "Batman", "Flash"] ];

// for(let i = 0 ; i < heros.length; i++){
//     console.log(i, heros[i], heros[i].length);
//     for(let j = 0; j < heros[i].length; j++){
//         console.log(heros[i][j]);
//     }
// }

let students_info = [ ["Aditya Lade", 90], ["Anuj Tekam", 95], ["Ayush Suryawanshi", 99] ];

for(let i =0; i<students_info.length; i++){
    console.log(`Info Of Student Id ${i+1}`);
    for(let j = 0; j<students_info[i].length; j++){
        console.log(students_info[i][j]);
    }
}