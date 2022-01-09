import { NodeLR as Node } from '@shared/index';

export class BinarySearchTree {
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
      if (newNode.value === temp.value) return undefined;

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

  contains(value: number): boolean {
    if (!this.root) return false;

    let temp: Node | null = this.root;

    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }

    return false;
  }

  minValueNode(currentNode: Node | null): Node | undefined {
    if (!currentNode) return undefined;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }
}
