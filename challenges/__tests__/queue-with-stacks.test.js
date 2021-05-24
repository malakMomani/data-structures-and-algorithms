'use strict';

let PQueue = require('../queueWithStacks/queue-with-stacks.js');
let queue = new PQueue();

describe('Queue Class Testing',()=>{

  it('Can successfully enqueue into a queue',()=>{
    queue.enqueue('welcome');
    expect(queue.dequeue().value).toEqual('welcome');
  });

  it('Can successfully enqueue multiple values into a queue',()=>{
    queue.enqueue('hello again');
    queue.enqueue('yes hello');
    expect(queue.dequeue().value).toEqual('hello again');
  });

  it('Can successfully dequeue out of a queue the expected value',()=>{
    expect(queue.dequeue().value).toEqual('yes hello');
  });
});

