'use strict';


function left_join(hash1, hash2) {

  let join = new Array();
  let keys = [], shared = [];
  hash1.table.forEach((item) => {
    let current = item.head;
    while (current) {
      let key = Object.keys(current.value)[0];
      keys.push(key);
      current = current.next;
    }
  });

  console.log(keys);

  hash2.table.forEach((item) => {
    let current = item.head;
    while (current) {
      let key = Object.keys(current.value)[0];
      if (keys.includes(key)) {
        shared.push(key);
      }
      current = current.next;
    }
  });
  console.log('shared' ,shared);

  for (let i = 0; i < keys.length; i++) {
    let fisrt = hash1.get(keys[i]);
    let second = null;

    // console.log(shared.includes(keys[i]));
    if(shared.includes(keys[i])){
      second = hash2.get(keys[i]);
    }
    let arr = [keys[i], fisrt, second];
    join.push(arr);
  }

  return join;
}

module.exports = left_join;
