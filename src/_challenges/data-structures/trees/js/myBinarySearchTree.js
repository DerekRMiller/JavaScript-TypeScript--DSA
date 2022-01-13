import { BinarySearchTreeJs } from '@src/data-structures/trees';

export const myBinarySearchTreeJs = () => {
  const util = require('util');
  const myBST = new BinarySearchTreeJs();
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
${util.inspect(myBST, false, null, true)}
--------------------------------------------------------`);
};
