import { BinarySearchTreeJs } from '@src/data-structures/trees';

export const myBinarySearchTreeJs = () => {
  const util = require('util');
  const myBST = new BinarySearchTreeJs();
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
--------------------------------------------------------
contains(5): ${util.inspect(myBST.contains(5), false, null, true)}
--------------------------------------------------------
minValueNode: ${util.inspect(myBST.minValueNode(myBST.root), false, null, true)}
--------------------------------------------------------
${util.inspect(myBST, false, null, true)}
--------------------------------------------------------`);
};
