import util = require('util');
import { BinarySearchTree } from '@src/data-structures/trees/';

export const myBinarySearchTree = (): void => {
  const myBST = new BinarySearchTree();
  const nodeArr = [7, 2, 1, 5, 10, 12, 9];

  nodeArr.forEach((num) => {
    myBST.insert(num);
  });

  const start = performance.now();
  myBST.contains(5);
  myBST.minValueNode(myBST.root);
  const end = performance.now();

  console.log(`
myBST.contains & myBST.minValueNode
--------------------------------------------------------
Execution time: ${end - start} ms
contains(5): ${util.inspect(myBST.contains(5), false, null, true)}
minValueNode: ${util.inspect(myBST.minValueNode(myBST.root), false, null, true)}
--------------------------------------------------------
insert already defined node(7), return: ${util.inspect(myBST.insert(7), false, null, true)}
--------------------------------------------------------
${util.inspect(myBST, false, null, true)}
--------------------------------------------------------`);
};
