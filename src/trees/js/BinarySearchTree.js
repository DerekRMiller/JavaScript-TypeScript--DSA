class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTreeJs {
  constructor() {
    this.root = null;
  }

  // (insert new node) :: O(log n)
  insert(value) {
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

  contains(value) {
    if (this.root === null) return false;

    let temp = this.root;

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

  minValueNode(currentNode) {
    while (currentNode.left != null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }
}
