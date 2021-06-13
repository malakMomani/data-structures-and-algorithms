'use strict';

function insertionSort(array){
  let j ;
  let temp;
  for (let i = 0; i < array.length; i++) {
    j = i - 1;
    temp = array[i];

    while(j>=0 && temp < array[j]) {
      array[j+1] = array[j];
      j = j-1;
    }

    array[j+1] = temp;
  }
  return array;
}

module.exports = insertionSort;
