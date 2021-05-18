/* eslint-disable no-unused-vars */
'use strict';

const { LinkedList } = require('../../Data-Structures/linkedList/linked-list');

function zipLists(ll1,ll2) {

  if(!ll1.head) {
    return ll2;
  }
  if(!ll2.head) {
    return ll1;
  }

  let currentNodell1 = ll1.head;
  let currentNodell2 = ll2.head;

  let llZip = new LinkedList();

  let rounds = ll1.size >= ll2.size ? ll2.size*2 : ll1.size*2;
  for (let i = 0; i < rounds; i++) {

    if(i%2===0){
      llZip.append(currentNodell1.value);
      currentNodell1= currentNodell1.next;
    } else {
      llZip.append(currentNodell2.value);
      currentNodell2= currentNodell2.next;
    }
  }

  let llZipCurrent = llZip.head;

  while(llZipCurrent.next){
    llZipCurrent = llZipCurrent.next;
  }

  if(ll1.size > ll2.size){
    llZipCurrent.next = currentNodell1;
  }
  if(ll1.size < ll2.size){
    llZipCurrent.next = currentNodell2;
  }

  return llZip;
}

module.exports = zipLists;
