'use strict';

const arrayBinarySearch = require('../arrayBinarySearch/array-binary-search.js');
let numbers = [31,112,34,4,45,336,28,20,29,100,292,290,0,2];

describe('Testing challenge03: Array Binary Search' ,()=>{
  it('search for an element by binary search algorithm and return the index' ,()=>{
    expect(arrayBinarySearch(numbers,31))
      .toEqual(0);
    expect(arrayBinarySearch(numbers,292)).toEqual(10);
    expect(arrayBinarySearch(numbers,2)).toEqual(13);
    expect(arrayBinarySearch(numbers,20)).toEqual(7);
  });

  it('return -1 if the element not in the array', ()=>{
    expect(arrayBinarySearch(numbers,999)).toEqual(-1);
    expect(arrayBinarySearch(numbers,55)).toEqual(-1);
    expect(arrayBinarySearch(numbers,6666)).toEqual(-1);
  });
});
