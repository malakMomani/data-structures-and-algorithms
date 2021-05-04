/* eslint-disable no-empty */
/* eslint-disable new-cap */
/* eslint-disable no-unused-vars */
'use strict';

function BinarySearch(arr ,key) {
  let low = 0;
  let high = arr.length -1 ;
  let middle = 0;
  while(low !== high){
    middle = Math.ceil((low+high)/2);
    if(arr[middle] === key){
      return middle;
    }
    if(arr[low] === key){
      return low;
    }
    if(arr[high] === key){
      return high;
    }
    if(arr[middle] > key){
      high = middle -1;
    } else {
      low = middle;
    }
  }
  return -1;
}

module.exports = BinarySearch;
