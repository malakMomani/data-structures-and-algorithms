'use strict';

const uniqueString = require('../uniqueString/uniqueString.js');

describe('If the string has unique characters', () => {

  it('return true if it has unique characters', () => {
    expect(uniqueString('I love cats')).toBeTruthy();
  });

  it('return false if it doesn\'t has unique characters', () => {
    expect(uniqueString('Donald the duck')).toBeFalsy();
  });

});
