import util = require('util');
import { BinarySearchTree } from '@src/data-structures/trees/';

export const myBinarySearchTree = (): void => {
  const myBST = new BinarySearchTree();
  const start = performance.now();

  myBST.insert(7);
  myBST.insert(2);
  myBST.insert(1);
  myBST.insert(5);
  myBST.insert(10);
  myBST.insert(12);
  myBST.insert(9);

  myBST.contains(5);

  myBST.minValueNode(myBST.root);

  const end = performance.now();

  console.log(`
myBST.insert, myBST.contains & myBST.minValueNode
--------------------------------------------------------
Execution time: ${end - start} ms
--------------------------------------------------------
contains(5): ${util.inspect(myBST.contains(5), false, null, true)}
--------------------------------------------------------
minValueNode: ${util.inspect(myBST.minValueNode(myBST.root), false, null, true)}
--------------------------------------------------------
insert already defined node (7) should returned undefined: ${util.inspect(
    myBST.insert(7),
    false,
    null,
    true
  )}
--------------------------------------------------------
${util.inspect(myBST, false, null, true)}
--------------------------------------------------------`);
};
