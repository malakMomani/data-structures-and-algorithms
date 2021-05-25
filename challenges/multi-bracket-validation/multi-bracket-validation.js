'use strict';

function multiBracketValidation(input) {
  let flag = 0;
  for (const i in input) {
    if (input[i] === '(' || input[i] === '{' || input[i] === '[') {
      flag++;
    } else if (input[i] === ')' || input[i] === '}' || input[i] === ']') {
      flag--;
    }
    if (flag < 0) return false;
  }
  if (flag > 0) return false;
  // OK !
  return true;
}

module.exports = multiBracketValidation;

