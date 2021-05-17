/* eslint-disable no-unused-vars */
'use strict';

const LinkedList = require('../linkedList/linked-list.js');

let ll = new LinkedList.LinkedList();

describe('Linked List Data Structure', ()=>{
  it('Can successfully instantiate an empty linked list' ,()=>{
    expect(ll.head).toBeNull();
    expect(ll.size).toEqual(0);
    expect(ll.toString()).toStrictEqual('NULL');
  });

  it('Can properly insert into the linked list',()=>{
    ll.insert(5);
    ll.insert('Malak');
    expect(ll.size).toEqual(2);
    expect(ll.toString()).toStrictEqual('{ 5 } -> { Malak } -> NULL');
  });

  it('The head property will properly point to the first node in the linked list',()=>{
    expect(ll.head.value).toEqual(5);
  });

  it('Can properly insert multiple nodes into the linked list',()=>{
    let array = ['I am','Web','Developer'];
    for (let i = 0; i < array.length; i++) {
      ll.insert(array[i]);
    }
    expect(ll.size).toEqual(5);
    expect(ll.toString()).toStrictEqual('{ 5 } -> { Malak } -> { I am } -> { Web } -> { Developer } -> NULL');
  });

  it('Will return true when finding a value within the linked list that exists', () => {
    expect(ll.includes('Developer')).toBeTruthy();
    expect(ll.includes('I am')).toBeTruthy();
    expect(ll.includes(5)).toBeTruthy();
  });

  it('Will return false when searching for a value in the linked list that does not exist',()=>{
    let ll2 = new LinkedList.LinkedList();
    expect(ll2.includes(2)).toBeFalsy();
    expect(ll.includes('dev')).toBeFalsy();
    expect(ll.includes('am')).toBeFalsy();
    expect(ll.includes(9)).toBeFalsy();
  });

  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    let ll2 = new LinkedList.LinkedList();
    expect(ll2.toString()).toStrictEqual('NULL');
    expect(ll.toString()).toStrictEqual('{ 5 } -> { Malak } -> { I am } -> { Web } -> { Developer } -> NULL');
    ll2.insert('first');
    expect(ll2.toString()).toStrictEqual('{ first } -> NULL');
  });

  /////////////////////////////// code challenge 06 //////////////////////////////

  let ll2 = new LinkedList.LinkedList();
  it('Can successfully add a node to the end of the linked list',()=>{
    ll2.append(99);
    expect(ll2.toString()).toStrictEqual('{ 99 } -> NULL');
  });
  it('Can successfully add multiple nodes to the end of a linked list', ()=>{
    ll2.append(100);
    ll2.append(101);
    ll2.append(102);
    expect(ll2.toString()).toStrictEqual('{ 99 } -> { 100 } -> { 101 } -> { 102 } -> NULL');
  });

  it('Can successfully insert a node before a node located in the middle of a linked list', ()=>{
    ll2.insertBefore(101,100.5);
    expect(ll2.toString()).toStrictEqual('{ 99 } -> { 100 } -> { 100.5 } -> { 101 } -> { 102 } -> NULL');
  });

  it('Can successfully insert a node before the first node of a linked list', ()=>{
    ll2.insertBefore(99,98);
    expect(ll2.toString()).toStrictEqual('{ 98 } -> { 99 } -> { 100 } -> { 100.5 } -> { 101 } -> { 102 } -> NULL');
  });

  it('Can successfully insert after a node in the middle of the linked list', ()=>{
    ll2.insertAfter(100, 100.1);
    expect(ll2.toString()).toStrictEqual('{ 98 } -> { 99 } -> { 100 } -> { 100.1 } -> { 100.5 } -> { 101 } -> { 102 } -> NULL');
  });

  it('Can successfully insert a node after the last node of the linked list', ()=>{
    ll2.insertAfter(102, 103);
    expect(ll2.toString()).toStrictEqual('{ 98 } -> { 99 } -> { 100 } -> { 100.1 } -> { 100.5 } -> { 101 } -> { 102 } -> { 103 } -> NULL');
  });
});
/////////////////////////////// code challenge 07 //////////////////////////////\
describe('kthFromEnd Function' ,()=>{

  let ll = new LinkedList.LinkedList();
  ll.append(20);
  ll.append(30);
  ll.append(40);
  ll.append(50);
  ll.append(60);

  it('throw error where k is greater than the length of the linked list', () => {
    expect(() => {
      ll.kthFromEnd(5);
    }).toThrow();
  });

  it('return the first value where k and the length of the list are the same',()=>{
    expect(ll.kthFromEnd(4)).toEqual(20);
  });

  it('throw error Where k is not a positive integer' ,()=>{
    expect(()=>{
      ll.kthFromEnd(-22);
    }).toThrow();
  });

  it('Where the linked list is of a size 1',()=>{
    let ll1 = new LinkedList.LinkedList();
    ll1.append('one');
    expect(ll1.kthFromEnd(0)).toEqual('one');
  });

  it('“Happy Path” where k is not at the end, but somewhere in the middle of the linked list',()=>{
    expect(ll.kthFromEnd(3)).toEqual(30);
    expect(ll.kthFromEnd(1)).toEqual(50);
  });
});


