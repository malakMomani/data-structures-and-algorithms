/* eslint-disable no-empty */
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

  /////////////////////////////// code challenge 06 //////////////////////////////

  append(value){
    let node = new Node(value);
    // if the linkedlist is empty
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

  insertBefore(value, newVal){
    let node = new Node(newVal);

    if(!this.head){
      throw new Error('Empty Linked List , No such value');
    } else {

      let currentNode = this.head.next;
      let trailCurrent = this.head;

      //if I have one item in the linked list
      if(!currentNode) {
        if(trailCurrent.value === value){
          node.next = trailCurrent;
          this.head = node;
          this.size++;
          return this;
        }
        else {
          throw new Error('One Item in Linked list, No such value');
        }
      }

      // if I have alot items
      // check first Item
      if(trailCurrent.value === value){
        this.head = node;
        node.next = trailCurrent;
        this.size++;
        return this;
      }
      while(currentNode){
        if(currentNode.value === value){
          trailCurrent.next=node;
          node.next = currentNode;
          this.size++;
          return this;
        }
        trailCurrent = currentNode;
        currentNode = currentNode.next;
      }

    }
    throw new Error('No such value');
  }

  insertAfter(value, newVal) {

    let node = new Node(newVal);

    if(!this.head){
      throw new Error('Empty Linked List , No such value');
    } else {

      let currentNode = this.head;
      while(currentNode){
        if(currentNode.value === value){
          node.next = currentNode.next;
          currentNode.next=node;
          this.size++;
          return this;
        }
        currentNode = currentNode.next;
      }
    }
    throw new Error('No such value');

  }
}

module.exports = {
  LinkedList,
  Node
};
