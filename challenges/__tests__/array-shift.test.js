'use strict';

const insertShiftArray = require('../arrayShift/array-shift.js');
let arr = ['Saturday','Sunday','Monday','Tuesday','Wedensday','Thursday'];

describe('Testing challenge02: Array Shift' ,()=>{
  it('insert value at the middle of the array and shift the rest of the elements' ,()=>{
    expect(insertShiftArray(arr,'Holidaaaaaaaay'))
      .toEqual(['Saturday','Sunday','Monday','Holidaaaaaaaay','Tuesday','Wedensday','Thursday']);
  });
});
