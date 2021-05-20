/* eslint-disable no-unused-vars */
'use strict';

const LinkedList = require('../../Data-Structures/linkedList/linked-list.js');

function palindrome(linkedList) {

  if(!linkedList.head) {
    throw new Error('Empty Linked list');
  }

  if(linkedList.size === 1){
    return true;
  }

  let llString = linkedList.toString();

  let current = linkedList.head;
  let beforeCurrent = null;
  while (current) {
    if (beforeCurrent === null) {
      beforeCurrent = current;
      current = current.next;
      beforeCurrent.next = null;
    } else {
      beforeCurrent = current;
      current = current.next;
      beforeCurrent.next = linkedList.head;
      linkedList.head = beforeCurrent;
    }
  }
  let llStringAfter = linkedList.toString();

  if(llString === llStringAfter){
    return true;
  }

  return false;
}


module.exports = palindrome;
