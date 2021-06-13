'use strict';

const insertionSort = require('../insertion-sort/insertion-sort.js');

describe('insertion sort' , ()=>{

  let array = [11,4,6,7,94,24];
  let a2 = [5,12,7,5,5,7];
  it('sort array correctly', ()=>{
    expect(insertionSort(array)).toStrictEqual([4,6,7,11,24,94]);
    expect(insertionSort(a2)).toStrictEqual([5,5,5,7,7,12]);

  });
});
