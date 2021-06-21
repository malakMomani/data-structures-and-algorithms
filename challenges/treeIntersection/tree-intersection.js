'use strict';

/**
declare function called tree-intersection and passed two trees as parameters
traverse in first tree using depth first traversal approach and store the elements into array
traverse in the second tree using depth first traversal and in each iteration check if the element value exist into the first array and push it in other array
return the other array
 */
function tree_intersection(aTree, bTree) {
  let aTreeArr = aTree.inOrder();
  let intersection = [];

  // in-order traversal
  function traverse(node) {
    if (node.left) traverse(node.left);
    if (aTreeArr.includes(node.value)) intersection.push(node.value);
    if (node.right) traverse(node.right);
  }
  traverse(bTree.root);
  return intersection;
}


module.exports = tree_intersection;
