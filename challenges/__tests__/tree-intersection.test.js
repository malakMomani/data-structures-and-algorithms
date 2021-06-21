'use strict';

const Tree = require('../../Data-Structures/tree/tree.js');
const Node = require('../../Data-Structures/tree/node.js');
const tree_intersection = require('../../challenges/treeIntersection/tree-intersection.js');

describe('Tree Intersection', () => {
  let a, b ,c;
  beforeAll(() => {
    let oneA = new Node(98);
    let twoA = new Node(2);
    let threeA = new Node(32);
    let fourA = new Node(100);
    let fiveA = new Node(33);
    let sixA = new Node(12);
    let sevenA = new Node(1);
    let eightA = new Node(45);
    let nineA = new Node(700);
    let tenA = new Node(30);
    let aa = new Node(24);

    oneA.left = twoA;
    oneA.right = threeA;
    twoA.left = sixA;
    twoA.right = tenA;
    sixA.left = sevenA;
    tenA.left = aa;
    threeA.right = fourA;
    fourA.left = fiveA;
    fourA.right = eightA;
    fiveA.right = nineA;

    let oneB = new Node(33);
    let twoB = new Node(2);
    let threeB = new Node(43);
    let fourB = new Node(67);
    let sixB = new Node(35);
    let sevenB = new Node(4);
    let eightB = new Node(100);
    let nineB = new Node(98);
    let tenB = new Node(1);
    let bbB = new Node(34);

    oneB.left = twoB;
    oneB.right = threeB;
    twoB.left = sixB;
    twoB.right = tenB;
    tenB.left = fourB;
    fourB.left = sevenB;
    fourB.right = eightB;
    threeB.left = nineB;
    threeB.right = bbB;

    a = new Tree.BinaryTree(oneA);
    b = new Tree.BinaryTree(oneB);

    let oneC = new Node(1);
    let twoC = new Node(2);
    let threeC = new Node(700);
    let fourC = new Node(99);
    let sixC = new Node(35);
    let sevenC = new Node(4);
    let eightC = new Node(30);
    let nineC = new Node(44);
    let tenC = new Node(67);
    let bbC = new Node(12);

    oneC.left = twoC;
    oneC.right = threeC;
    twoC.left = sixC;
    twoC.right = tenC;
    tenC.left = fourC;
    fourC.left = sevenC;
    fourC.right = eightC;
    threeC.left = nineC;
    threeC.right = bbC;

    c = new Tree.BinaryTree(oneC);

  });

  it('find the intersection between two trees', () => {
    expect(tree_intersection(a, b)).toEqual([2, 100, 1, 33, 98]);
    expect(tree_intersection(a, c)).toEqual([ 2, 30, 1, 700, 12 ]);
    expect(tree_intersection(c, b)).toEqual( [ 35, 2, 4, 67, 1 ]);

  });
});

