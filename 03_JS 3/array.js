let cars=["bmw", "audi", "xuv", "maruti"];
cars.push("toyata");    //add toyato to last index
console.log("After push 'toyata':",cars);

cars.pop();   //remove last element and display that
console.log("After pop:",cars);

cars.unshift("toyata"); //add toyata to frist index or starting od arrat
console.log("After unshift 'toyata':",cars);

cars.shift();
console.log("After shift:",cars);

let index=cars.indexOf("audi");
console.log("Index of Audi:",index);
let not=cars.indexOf("lambo");
console.log("Index of lambo(not exist in array):",not);

console.log("Value:",cars.includes("Ford"));

let primanry=["red","yellow","blue"];
let secondary=["orange","green", "voilet"];
console.log(primanry.concat(secondary));
console.log(primanry.reverse());

let color=["red", "yellow", "blue", "orange", "green", "voilet"];
console.log(color.slice(2, 3));

// Splice: splice(index, deletcount, additem,additem.....so on)
console.log(color.splice(2, 0, "white"));

//Sort:
console.log(color.sort());
let marks=[99, 10, 20, 30, 40, 50 ];    //exceptional case:

//cosntant array
// const arr = [1, 2, 3, 4];
// arr=[4, 5, 6];    //gives error


//Nested array:
let info=[ ["Aditya", "Lade"], ["Anuj", "Tekam"], ["Ayush", "Suryawanshi"] ];
console.log(info[0][0]);
console.log(info[2][1]);