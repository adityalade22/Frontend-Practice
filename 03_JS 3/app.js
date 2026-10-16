// let msg ="       Hello     ";

let Password = prompt("Set Your Password");
let newPassword = Password.trim();
console.log(newPassword)

//new method
let name="aditya";

let msg = "ILoveCoding";
msg.indexOf("Love");


let add ="     hello    "
// let newAdd = add.trim();
// console.log("After Trim: ", newAdd)
// newAdd = newAdd.toUpperCase();
// console.log("After Upper Case :", newAdd);
let newAdd = add.trim().toUpperCase();
console.log("After Operations:", newAdd);

//slice method:
let para="hello";
console.log(para.slice(0,4));


//Replace Method
let aalo="ILoveCoding";
let kalo= aalo.replace("Love", "Hate");
console.log(kalo);

//Repeat Method:
let moon = "Good ";
let after = moon.repeat(5);
console.log(after);
