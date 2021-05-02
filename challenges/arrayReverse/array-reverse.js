'use strict';

function reverseArray(arr) {
  let reversedArr =[];
  for (let index = arr.length-1; index > -1; index--){
    reversedArr.push(arr[index]);
  }
  return reversedArr;
}

let arr = [2,45,6,8,87,43,3];
// console.log(arr);
console.log(reverseArray(arr));
