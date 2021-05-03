'use strict';

function insertShiftArray(arr, value) {

  let index = Math.ceil(arr.length / 2);

  let temp = arr[index];
  arr[index] = value;
  arr.push(temp);

  for (let i = index+1 ; i < arr.length; i++) {
    temp = arr[i];
    arr[i]=arr[arr.length-1];
    arr.pop();
    arr.push(temp);
  }
  return arr;
}

module.exports = insertShiftArray;
