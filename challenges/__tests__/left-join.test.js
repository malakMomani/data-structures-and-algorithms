'use strict';

const HashTable = require('../../Data-Structures/hashtable/hashtable.js');
const left_join = require('../leftJoin/left-join.js');

let hashtable = new HashTable();
hashtable.add('malak','Al-momani');
hashtable.add('welcome','Code402');
hashtable.add('xyx','once');
hashtable.add('yxx','twice');
hashtable.add('first','Hello');
hashtable.add('code401','hashtable');
hashtable.add('amman','Jordan');

let hashtable2 = new HashTable();
hashtable2.add('malak','Raed');
hashtable2.add('Hi','Hello');
hashtable2.add('xyx','second');
hashtable2.add('abc','not');
hashtable2.add('first','welcome');
hashtable2.add('code401','join');
hashtable2.add('Jordan','amman');

describe('Left Join' ,()=>{

  it('Can left - join two hash tables ' ,()=>{
    expect(left_join(hashtable, hashtable2)).toStrictEqual([
      [ 'first', 'Hello', 'welcome' ],
      [ 'code401', 'hashtable', 'join' ],
      [ 'malak', 'Al-momani', 'Raed' ],
      [ 'amman', 'Jordan', null ],
      [ 'xyx', 'once', 'second' ],
      [ 'yxx', 'twice', null ],
      [ 'welcome', 'Code402', null ]
    ]);
  });
});
