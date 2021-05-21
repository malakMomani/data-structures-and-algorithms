'use strict';

let Stack_Queue = require('../stacks-and-queues.js');

let stack = new Stack_Queue.Stack();
let queue = new Stack_Queue.Queue();

describe('Stack Class Testing' ,() =>{
  it('Can successfully push onto a stack',()=>{
    stack.push('hello');
    expect(stack.peek()).toEqual('hello');
  });

  it('Can successfully push multiple values onto a stack',()=>{
    stack.push('hello again');
    stack.push('yes hello');
    expect(stack.size).toEqual(3);
    expect(stack.peek()).toEqual('yes hello');
  });

  it('Can successfully pop off the stack',()=>{
    expect(stack.pop().value).toEqual('yes hello');
  });
  it('Can successfully empty a stack after multiple pops',() =>{
    stack.pop();
    stack.pop();
    expect(()=>{
      stack.peek();
    }).toThrow();
    expect(stack.size).toEqual(0);
  });

  it('Can successfully peek the next item on the stack',()=>{
    stack.push(22);
    stack.push(2);
    expect(stack.peek()).toEqual(2);
  });

  it('Can successfully instantiate an empty stack',()=>{
    let ss = new Stack_Queue.Stack();
    expect(ss instanceof Stack_Queue.Stack).toBeTruthy();
  });

  it('Calling pop or peek on empty stack raises exception',()=>{
    let ss = new Stack_Queue.Stack();
    expect(()=>{
      ss.pop();
    }).toThrow();

    expect(()=>{
      ss.peek();
    }).toThrow();
  });
});

describe('Queue Class Testing',()=>{

  it('Can successfully enqueue into a queue',()=>{
    queue.enqueue('welcome');
    expect(queue.peek()).toEqual('welcome');
  });

  it('Can successfully enqueue multiple values into a queue',()=>{
    queue.enqueue('hello again');
    queue.enqueue('yes hello');
    expect(queue.size).toEqual(3);
    expect(queue.peek()).toEqual('welcome');
  });

  it('Can successfully dequeue out of a queue the expected value',()=>{
    expect(queue.dequeue().value).toEqual('welcome');
  });

  it('Can successfully peek into a queue, seeing the expected value',()=>{
    expect(queue.peek()).toEqual('hello again');
  });

  it('Can successfully empty a queue after multiple dequeues',()=>{

    queue.dequeue();
    queue.dequeue();

    expect(()=>{
      queue.peek();
    }).toThrow();
    expect(queue.size).toEqual(0);
  });

  it('Can successfully instantiate an empty queue',()=>{
    let q = new Stack_Queue.Queue();
    expect(q instanceof Stack_Queue.Queue).toBeTruthy();
  });

  it('Calling dequeue or peek on empty queue raises exception',()=>{
    let q = new Stack_Queue.Queue();
    expect(()=>{
      q.dequeue();
    }).toThrow();

    expect(()=>{
      q.peek();
    }).toThrow();
  });
});
