'use strict';

let quickSort = require('../quick-sort/quick-sort.js');

describe('Quick Sort',()=>{
  let array = [11,4,6,7,94,24];
  let a2 = [5,12,7,5,5,7];

  it('Sorting Array with quick Sort',()=>{
    expect(quickSort(array,0,array.length-1)).toStrictEqual([4,6,7,11,24,94]);
    expect(quickSort(a2,0,a2.length-1)).toStrictEqual([5,5,5,7,7,12]);
  });
});
