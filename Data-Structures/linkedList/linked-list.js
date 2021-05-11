/* eslint-disable no-unused-vars */
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class LinkedList {

  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    let node = new Node(value);
    // if the linkedlist i empty
    if (!this.head) {
      this.head = node;
      this.size++;
    } else {
      // if not empty
      let currentNode = this.head;
      while(currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      this.size++;
    }
    return this;
  }

  includes(value) {
    if(!this.head){
      return false;
    } else {
      let currentNode = this.head;
      while(currentNode){
        if(currentNode.value === value){
          return true;
        }
        currentNode = currentNode.next;
      }
    }
    return false;
  }

  toString(){
    let str = '';
    if(this.head) {
      let currentNode = this.head;
      while(currentNode){
        str = str + `{ ${currentNode.value} } -> `;
        currentNode = currentNode.next;
      }
      str = str + `NULL`;
    } else {
      str = str + `NULL`;
    }
    return str;
  }
}

module.exports = {
  LinkedList,
  Node
};
