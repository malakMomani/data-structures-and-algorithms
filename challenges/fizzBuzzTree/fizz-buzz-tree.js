'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.childern = [];
  }
}

class K_AryTree{
  constructor(root = null , k = 2){
    this.root = root;
    this.k = k;
  }
}
function fizzBuzzTree(tree){
  if(!tree.root) return tree;

  function fbt(node){
    if(node.value%3 === 0 && node.value%5 === 0) node.value = 'FizzBuzz';
    else if(node.value%3 === 0) node.value = 'Fizz';
    else if(node.value%5 === 0) node.value = 'Buzz';
    else node.value = `${node.value}`;
    for (let i = 0; i < tree.k ; i++) {
      if(node.childern[i]) fbt(node.childern[i]);
    }
  }

  fbt(tree.root);
  return tree;

}

module.exports = {
  fizzBuzzTree,
  Node,
  K_AryTree
};
