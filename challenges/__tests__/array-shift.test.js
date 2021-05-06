'use strict';

const insertShiftArray = require('../arrayShift/array-shift.js');
let arr = ['Saturday','Sunday','Monday','Tuesday','Wedensday','Thursday'];
let numbers = [1,2,3,4,5,6];

describe('Testing challenge02: Array Shift' ,()=>{
  it('insert value at the middle of the array and shift the rest of the elements' ,()=>{
    expect(insertShiftArray(arr,'Holidaaaaaaaay'))
      .toEqual(['Saturday','Sunday','Monday','Holidaaaaaaaay','Tuesday','Wedensday','Thursday']);
  });

  it('FAIL if not inserted in the middle', ()=>{
    expect(insertShiftArray(numbers,-1).not.toEqual([1,2,3,-1,4,5,6]));
  });
});
