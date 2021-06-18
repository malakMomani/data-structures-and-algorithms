'use strict';
let mergeSort = require('../merge-sort/merge-sort.js');

describe('Merge Sort',()=>{

  it('sort an array correctly',()=>{
    let array = [11,4,6,7,94,24];
    let a2 = [5,12,7,5,5,7];

    expect(mergeSort(array)).toEqual([4,6,7,11,24,94]);
    expect(mergeSort(a2)).toEqual([5,5,5,7,7,12]);
  });
});
