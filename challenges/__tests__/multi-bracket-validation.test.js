'use strict';

const validation = require('../multi-bracket-validation/multi-bracket-validation.js');

describe('Multi Bracket Validation function',()=>{
  it('Should return true if the string is valid',()=>{
    expect(validation('(){}[[]]')).toBeTruthy();
    expect(validation('()[[]]')).toBeTruthy();
    expect(validation('{}[](())')).toBeTruthy();

  });
  it('Should return false if the string is invalid',()=>{
    expect(validation('[({}]')).toBeFalsy();
    expect(validation('}')).toBeFalsy();
    expect(validation('([(')).toBeFalsy();

  });
});
