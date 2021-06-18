'use strict';

/*
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
 */

function mergeSort(arr){
  let n = arr.length;

  if(n > 1){
    let mid = Math.ceil(n/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid, n);

    //sort the left
    mergeSort(left);
    //sort the right
    mergeSort(right);
    merge(left, right, arr);
  }
  return arr;
}

function merge(left, right, arr){
  let i= 0 , j = 0, k =0;

  while(i < left.length && j < right.length){
    if(left[i] <= right[j]){
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }
    k++;
  }
  //copy the rest of right array to the main one
  if(i === left.length){
    while(j < right.length){
      arr[k]=right[j];
      k++;
      j++;
    }
  } else {
  //copy the rest of right array to the main one
    while(i < left.length){
      arr[k]=left[i];
      k++;
      i++;
    }
  }
}

module.exports = mergeSort;
