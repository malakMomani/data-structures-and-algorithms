'use strict';

const { LinkedList } = require('../../Data-Structures/linkedList/linked-list.js');
let llZip = require('../llZip/ll-zip.js');

let ll1 = new LinkedList();
ll1.append(20);
ll1.append(30);
ll1.append(40);
let ll2 = new LinkedList();
ll2.append('here');
ll2.append('I');
ll2.append('am');

describe('Test Linked List Zip function' ,()=>{

  it('Can Zip two lists in one list' ,()=>{
    expect(llZip(ll1,ll2).toString()).toStrictEqual('{ 20 } -> { here } -> { 30 } -> { I } -> { 40 } -> { am } -> NULL');
  });

  it('Can Zip two lists if any has length more than other one' ,()=>{
    ll1.append('here');
    ll1.append('extra');
    expect(llZip(ll1,ll2).toString()).toStrictEqual('{ 20 } -> { here } -> { 30 } -> { I } -> { 40 } -> { am } -> { here } -> { extra } -> NULL');

    let ll3 = new LinkedList();
    expect(llZip(ll2,ll3).toString()).toStrictEqual('{ here } -> { I } -> { am } -> NULL');

    ll3.append(3);
    expect(llZip(ll2,ll3).toString()).toStrictEqual('{ here } -> { 3 } -> { I } -> { am } -> NULL');
  });


});
