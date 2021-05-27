'use strict';

const Node = require('../tree/node.js');


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

