/*
  You are given an integer array nums with no duplicates. A maximum binary tree can be built recursively from nums using the following algorithm:

  Create a root node whose value is the maximum value in nums.
  Recursively build the left subtree on the subarray prefix to the left of the maximum value.
  Recursively build the right subtree on the subarray suffix to the right of the maximum value.
  
  Return the maximum binary tree built from nums.
 
  Input: nums = [3,2,1,6,0,5]
  Output: [6,3,5,null,2,0,null,null,1]
*/

import util = require('util');

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function maximumBinaryTreeRec(nums: number[]): TreeNode | null {
  // check if initial or sub array is empty. (Add null value to undefined right or left node.)
  if (nums.length === 0) {
    return null;
  }

  // Create new node from largest integer in current array.
  const node = new TreeNode(Math.max(...nums));
  // Get index of largest integer in current array.
  const nodeIndex = nums.findIndex((element) => element === node.val);

  // Rec: call function again with new array cut from left side of current node index.
  node.left = maximumBinaryTreeRec(nums.slice(0, nodeIndex));
  // Rec: call function again with new array created from right side of current node index (excluding max element).
  node.right = maximumBinaryTreeRec(nums.slice(nodeIndex + 1, nums.length));

  return node;
}

export const myMaximumBinaryTree = () => {
  const arr = [3, 2, 1, 6, 0, 5];
  const start = performance.now();
  const maximumBinaryTree = maximumBinaryTreeRec(arr);
  const end = performance.now();

  console.log(`
Array input: ${util.inspect(arr, false, null, true)}
------------------------------------------------
Max Binary Tree
[time: ${end - start} ms]
------------------------------------------------
${util.inspect(maximumBinaryTree, false, null, true)}
------------------------------------------------
  `);
};
