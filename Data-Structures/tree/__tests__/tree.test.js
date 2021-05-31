'use strict';

const BinaryTree = require('../tree');
const Node = require('../node');

let tree = null;
describe('Binary Tree', ()=> {

  beforeAll(()=> {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree.BinaryTree(one);
  });

  it ('constructor', ()=> {
    let newTree = new BinaryTree.BinaryTree();
    expect(newTree.root).toBeNull();
  });

  it ('preOrder', ()=> {
    let expected = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrderResult = tree.preOrder();
    expect(preOrderResult).toEqual(expected);
  });

  it ('inOrder', ()=> {
    let expected = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrderResult = tree.inOrder();
    expect(inOrderResult).toEqual(expected);
  });

  it ('postOrder', ()=> {
    let expected = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrderResult = tree.postOrder();
    //sconsole.log(treeify.asTree(tree,true));
    expect(postOrderResult).toEqual(expected);
  });

  // -------------------------- challenge 16 find-maximum-value ----------------------------------

  it('find a maximum value in the tree',()=>{
    expect(tree.findMaximumValue()).toEqual(9);
  });

  // -------------------------- challenge 17 breadth first traversal ----------------------------------

  it('breadth first traversal',()=>{
    let expected = [1, 2, 3, 6, 4, 5, 7, 8, 9];
    let bf = tree.breadthFirst();
    expect(bf).toEqual(expected);
  });
});

describe('Binary Search Tree' ,()=>{
  beforeAll(()=> {
    let one = new Node(45);
    let two = new Node(33);
    let three = new Node(66);
    let four = new Node(20);
    let five = new Node(40);
    let six = new Node(55);
    let seven = new Node(9);
    let eight = new Node(25);
    let nine = new Node(54);
    let ten = new Node(71);

    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;
    three.left = six;
    four.left = seven;
    four.right = eight;
    six.left = nine;
    six.right = ten;

    tree = new BinaryTree.BinarySearchTree(one);
  });

  it ('constructor', ()=> {
    let newTree = new BinaryTree.BinarySearchTree();
    expect(newTree.root).toBeNull();
  });

  it('add to binary search tree in order',()=>{
    tree.add(60);
    expect(tree.inOrder()).toEqual([9,20,25,33,40,45,54,55,60,71,66]);
  });

  it('check if a value in tree or not',()=>{
    expect(tree.contains(4)).toBeFalsy();
    expect(tree.contains(45)).toBeTruthy();
    expect(tree.contains(3432)).toBeFalsy();
    expect(tree.contains(9)).toBeTruthy();
  });

});
