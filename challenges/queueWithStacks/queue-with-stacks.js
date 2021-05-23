/* eslint-disable no-unused-vars */
'use strict';

const stack = require('../../Data-Structures/stacksAndQueues/stacks-and-queues');

class PseudoQueue {

  constructor(){
    this.stack1 = new stack.Stack();
    this.stack2 = new stack.Stack();
  }
  enqueue(value){
    this.stack1.push(value);
  }
  dequeue() {
    if(this.stack2.size === 0) {
      if(this.stack1.size ===0){
        throw new Error('Empty Queue');
      }
      while(this.stack1.size > 0){
        let element = this.stack1.pop();
        this.stack2.push(element.value);
      }
    }
    return this.stack2.pop();
  }
}
module.exports = PseudoQueue;
