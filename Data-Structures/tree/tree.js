'use strict';

const Node = require('../tree/node.js');
const queue = require('../stacksAndQueues/stacks-and-queues.js');

class BinaryTree {
  constructor(root = null){
    this.root = root;
  }
  preOrder(){
    let result = [];

    function traverse(node){
      result.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  inOrder(){
    let result = [];

    function traverse(node){
      if(node.left) traverse(node.left);
      result.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

  postOrder(){
    let result = [];

    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }

  // -------------------------- challenge 16 find-maximum-binary-tree ----------------------------

  findMaximumValue(){
    if(!this.root) throw new Error('Empty tree');
    let max = 0;
    function check(node){
      if(node.value > max){
        max = node.value;
      }
      if(node.left) check(node.left);
      if(node.right) check(node.right);
    }
    check(this.root);
    return max;
  }

  // ----------------------- challenge 17  breadth first ----------------------------

  breadthFirst() {
    let result =[];
    let q = new queue.Queue();
    q.enqueue(this.root);

    function traverse(){
      let current = q.dequeue();
      result.push(current.value.value);
      if(current.value.left) q.enqueue(current.value.left);
      if(current.value.right) q.enqueue(current.value.right);
      if(!q.isEmpty()) traverse();
    }
    traverse();
    return result;
  }
}

class BinarySearchTree {
  constructor(root = null){
    this.root = root;
  }

  add(value){
    let newNode = new Node(value);

    function insertNode(node , newNode) {
      if(newNode.value < node.value){
        if (node.left === null) node.left = newNode;
        else insertNode(node.left,newNode);
      } else {
        if(node.right === null) node.right = newNode;
        else insertNode(node.right,newNode);
      }
    }
    if(!this.root){
      newNode = this.root;
    } else insertNode(this.root ,newNode);
  }

  contains(value){

    if(!this.root) return false;

    function check(node,data) {
      if(node){
        if(data<node.value) {
          return check(node.left,data);
        } else if (data > node.value){
          return check(node.right, data);
        } else return true;
      }
      return false;
    }
    let result = false;
    result = check(this.root, value);
    return result;
  }

  inOrder(){
    let result = [];

    function traverse(node){
      if(node.left) traverse(node.left);
      result.push(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return result;
  }

}

module.exports = {
  BinaryTree,
  BinarySearchTree
};

