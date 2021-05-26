/* eslint-disable no-unused-vars */
'use strict';

const Queue = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');

function multiBracketValidation(input) {
  let queue = new Queue.Queue();
  let inputReversed = input.split('').reverse().join('');
  // console.log(input, inputReversed,input.length);
  for (let i = 0; i < input.length; i++) {
    if(inputReversed.charAt(i) === ')' || inputReversed.charAt(i) === ']' || inputReversed.charAt(i) === '}'){
      queue.enqueue(inputReversed.charAt(i));
    } else {
      if(queue.isEmpty()){
        return false;
      }
      if(inputReversed.charAt(i) === '(' && queue.peek()!== ')' ||
      inputReversed.charAt(i) === '[' && queue.peek()!== ']' ||
      inputReversed.charAt(i) === '{' && queue.peek()!== '}'){
        return false;
      }
      queue.dequeue();
    }
  }
  return queue.isEmpty();
}


module.exports = multiBracketValidation;

