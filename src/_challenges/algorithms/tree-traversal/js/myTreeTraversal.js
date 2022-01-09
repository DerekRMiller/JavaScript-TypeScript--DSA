import { TreeTraversalJs } from '@src/algorithms/';

/*
              47
          21      76
        18  27  52  82
*/

export const myTreeTraversalJs = () => {
  const util = require('util'),
    myBST = new TreeTraversalJs();

  myBST.insert(47);
  myBST.insert(21);
  myBST.insert(76);
  myBST.insert(18);
  myBST.insert(27);
  myBST.insert(52);
  myBST.insert(82);

  const start = performance.now();
  myBST.DFSInOrder();
  const end = performance.now();

  console.log(`
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
