'use strict';

let queue = require('../../Data-Structures/stacksAndQueues/stacks-and-queues.js');
let q = new queue.Queue();
q.enqueue('Malak');
q.enqueue('Ali');
q.enqueue('Lama');
q.enqueue('Ahmad');
q.enqueue('Sobhi');
q.enqueue('Hello');

function duckDuckGoose(k){
  let item;
  let count = k;
  while(!q.isEmpty()){
    count = k;
    while(count-1 > 0){
      item = q.dequeue();
      q.enqueue(item.value);
      count--;
    }
    let out = q.dequeue();
    console.log('out: ',out);
  }
}


duckDuckGoose(4);
