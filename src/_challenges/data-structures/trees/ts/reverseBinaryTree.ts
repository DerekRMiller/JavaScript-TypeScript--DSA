import util = require('util');
import { NodeLR } from '@shared/index';
import { BinarySearchTree } from '@src/data-structures/trees/';

const reverse = (node: NodeLR | null): NodeLR | undefined => {
  if (!node) return;

  const left = node.left;
  node.left = node.right;
  node.right = left;

  reverse(node.left);
  reverse(node.right);

  return node;
};

export const reverseBinarySearchTree = (): void => {
  const myBST = new BinarySearchTree();
  const nodeArr = [7, 2, 1, 5, 10, 12, 9];

  nodeArr.forEach((num) => {
    myBST.insert(num);
  });

  const start = performance.now();
  const reverseBST = () => reverse(myBST.root);
  const end = performance.now();

  console.log(`
Original
--------------------------------------------------------
${util.inspect(myBST, false, null, true)}
--------------------------------------------------------
Reverse
--------------------------------------------------------
Execution time: ${end - start} ms
--------------------------------------------------------
${util.inspect(reverseBST(), false, null, true)}
--------------------------------------------------------`);
};
