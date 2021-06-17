'use strict';

const HashTable = require('../hashtable');
/*
Adding a key/value to your hashtable results in the value being in the data structure
Retrieving based on a key returns the value stored
Successfully returns null for a key that does not exist in the hashtable
Successfully handle a collision within the hashtable
Successfully retrieve a value from a bucket within the hashtable that has a collision
Successfully hash a key to an in-range value
 */
describe('Hash Table Class',()=>{
  let hashtable = new HashTable();
  hashtable.add('malak','Al-momani');
  hashtable.add('welcome','Code402');
  hashtable.add('xyx','once');
  hashtable.add('yxx','twice');
  hashtable.add('first','Hello');
  hashtable.add('code401','hashtable');
  hashtable.add('amman','Jordan');

  it('Adding a key/value to your hashtable results in the value being in the data structure',()=>{
    hashtable.add('test','test');
    expect(hashtable.noOfElements).toEqual(8);
  });

  it('Retrieving based on a key returns the value stored',()=>{
    expect(hashtable.get('amman')).toEqual('Jordan');

  });

  it('Successfully returns null for a key that does not exist in the hashtable',()=>{
    expect(hashtable.get('yzz')).toEqual(null);
  });

  it('Successfully handle a collision within the hashtable',()=>{
    hashtable.add('kalam','reverse');
    expect(hashtable.noOfElements).toEqual(9);
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',()=>{
    expect(hashtable.get('kalam')).toEqual('reverse');

  });
  it('Successfully hash a key to an in-range value',()=>{
    expect(hashtable.hash('kalam')).toBeLessThanOrEqual(1023);

  });

  it('check if the elemnt contain in hash table or not ',()=>{
    expect(hashtable.contain('iii')).toEqual(false);
    expect(hashtable.contain('yxx')).toEqual(true);

  });
});
