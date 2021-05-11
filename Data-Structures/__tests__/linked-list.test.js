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
});
