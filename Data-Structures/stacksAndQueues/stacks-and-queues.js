'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop(){
    if(!this.top){
      throw new Error('Empty Stack');
    }

    let item = this.top;
    this.top = this.top.next;
    item.next = null;
    this.size--;
    return item;
  }

  peek() {
    if(!this.top){
      throw new Error('Empty Stack');
    }

    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}


class Queue{
  constructor(){
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);

    if(!this.front) {
      this.front = this.rear =node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
    this.size++;
  }

  dequeue() {
    if(!this.front){
      throw new Error('Empty Queue');
    }

    let item = this.front;
    this.front = this.front.next;
    item.next = null;
    this.size--;
    return item;
  }

  peek(){
    if(!this.front){
      throw new Error('Empty Queue');
    }

    return this.front.value;
  }

  isEmpty(){
    return this.front === null;
  }


}

module.exports = {
  Stack: Stack,
  Queue: Queue
};
