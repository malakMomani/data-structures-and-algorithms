/* eslint-disable no-unused-vars */
'use strict';

const Stack = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

function multiBracketValidation(input) {
  let stack = new Stack.Stack();
  for (let i = 0; i < input.length; i++) {
    if(input.charAt(i) === '(' || input.charAt(i) === '{' || input.charAt(i) === '['){
      stack.push(input.charAt(i));
    } else {
      if(stack.isEmpty()){
        return false;
      }
      if(input.charAt(i) === ')' && stack.peek()!== '(' ||
      input.charAt(i) === ']' && stack.peek()!== '[' ||
      input.charAt(i) === '}' && stack.peek()!== '{'){
        return false;
      }
      stack.pop();
    }
  }
  return stack.isEmpty();
}


module.exports = multiBracketValidation;

