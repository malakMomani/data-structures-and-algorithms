'use strict';

const LinkedList = require('../linkedList/linked-list.js');

class HashTable {
  constructor(size = 1024) {
    this.size = size;
    this.noOfElements = 0;
    this.table = new Array(size);
  }

  add(key, value) {
    const hashed = this.hash(key);
    if (!this.table[hashed]) {
      this.table[hashed] = new LinkedList.LinkedList();
    }
    this.table[hashed].insert({ [key]: value });
    this.noOfElements++;
  }

  hash(key) {
    const sum = key.split('').reduce((acc, v) => acc + v.charCodeAt(0), 0);
    let hashed = (sum * 19) % this.size;

    return hashed;
  }

  get(key){
    const hashed = this.hash(key);
    if (!this.table[hashed]) {
      return null;
    }


    let current = this.table[hashed].head;
    while(current) {
      let keys = Object.keys(current.value);
      if (keys[0] === key) {
        return current.value[key];
      }
      current = current.next;
    }
    return null;

  }


  contain(key){
    const hashed = this.hash(key);
    if(!this.table[hashed]) return false;
    return true;
  }
}
module.exports = HashTable;
