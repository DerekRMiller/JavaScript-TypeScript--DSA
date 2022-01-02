import util = require('util');
import { NodeLR as Node } from '_shared';

class BST {
  root: Node | null;

  constructor() {
    this.root = null;
  }

  // (insert new node) :: O(log n)
  insert(value: number): this | undefined {
    const newNode = new Node(value);

    // if starting new tree (first node)
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // pointer
    let temp = this.root;

    while (true) {
      // if node already exists
      if (newNode === temp) return undefined;

      // if value less than root node
      if (newNode.value < temp.value) {
        // next spot is empty, add node
        if (temp.left === null) {
          temp.left = newNode;
          return this;
        }

        // if spot filled, update temp (pointer)
        temp = temp.left;
      } else {
        // value greater than root
        // next spot is empty, add node
        if (temp.right === null) {
          temp.right = newNode;
          return this;
        }

        // if spot filled, update temp (pointer)
        temp = temp.right;
      }
    }
  }

  // Breadth First Search
  BFS(): number[] {
    let currentNode = this.root as Node;
    const queue: Node[] = [],
      result: number[] = [];

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift() as Node;
      result.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return result;
  }

  // Depth First Search
  DFSPreOrder(): number[] {
    const result: number[] = [];

    const traverse = (currentNode: Node): void => {
      result.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    };

    traverse(this.root as Node);
    return result;
  }

  DFSPostOrder(): number[] {
    const result: number[] = [];

    const traverse = (currentNode: Node): void => {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      result.push(currentNode.value);
    };

    traverse(this.root as Node);
    return result;
  }

  DFSInOrder(): number[] {
    const result: number[] = [];

    const traverse = (currentNode: Node): void => {
      if (currentNode.left) traverse(currentNode.left);
      result.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    };

    traverse(this.root as Node);
    return result;
  }
}

/*
              47
          21      76
        18  27  52  82
  */

export const myTreeTraversal = (): void => {
  const myBST = new BST();

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
