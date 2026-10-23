//reduce method :
console.log("reduce method");
let reduce_array = [1, 2, 3, 4, 5];
let final = reduce_array.reduce((returnValue, value) => returnValue + value);
console.log(final);

//program to find Maximum number in Array:
let array = [1, 15, 10, 5, 4, 7, 20, 2];
let answer = array.reduce((final, arr) => {
  if (final > arr) {
    return final;
  } else {
    return arr;
  }
});
console.log(answer);

//question 1:
console.log("1st Question of chapter");
let arr = [1, 2, 4, 10, 20, 40, 25];
let ans = arr.every((el) => el % 10 == 0);
console.log(ans);

//question 2:
console.log("2nd Question of chapter");
let array1 = [10, 5, 12, 7, 2, 8, 6];

function getMin(arry) {
  let result = arry.reduce((final, arr) => {
    if (final < arr) {
      return final;
    } else {
      return arr;
    }
  });
  console.log(result);
}


