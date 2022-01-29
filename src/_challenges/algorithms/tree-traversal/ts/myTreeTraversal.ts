import util = require('util');
import { TreeTraversal } from '@src/algorithms/';

/*
              47
          21      76
        18  27  52  82
  */

export const myTreeTraversal = (): void => {
  const myBST = new TreeTraversal();
  const nodeArr = [47, 21, 76, 18, 27, 52, 82];

  nodeArr.forEach((num) => {
    myBST.insert(num);
  });

  const start = performance.now();
  myBST.DFSInOrder();
  const end = performance.now();

  console.log(`
myTreeTraversal
-----------------------------------------
DFSInOrder()
Execution time: ${end - start} ms
-----------------------------------------
BFS
${util.inspect(myBST.BFS(), false, null, true)}
DFSPreOrder
${util.inspect(myBST.DFSPreOrder(), false, null, true)}
DFSPostOrder
${util.inspect(myBST.DFSPostOrder(), false, null, true)}
DFSInOrder
${util.inspect(myBST.DFSInOrder(), false, null, true)}
`);
};
