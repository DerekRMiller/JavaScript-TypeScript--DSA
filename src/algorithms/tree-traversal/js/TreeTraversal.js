class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class TreeTraversalJs {
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

  // Breadth First Search
  BFS() {
    let currentNode = this.root;
    const queue = [];
    const result = [];

    queue.push(currentNode);

    while (queue.length) {
      currentNode = queue.shift();
      result.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
    return result;
  }

  // Depth First Search
  DFSPreOrder() {
    const results = [];

    const traverse = (currentNode) => {
      results.push(currentNode.value);
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
    };

    traverse(this.root);
    return results;
  }

  DFSPostOrder() {
    const results = [];

    const traverse = (currentNode) => {
      if (currentNode.left) traverse(currentNode.left);
      if (currentNode.right) traverse(currentNode.right);
      results.push(currentNode.value);
    };

    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    const results = [];

    const traverse = (currentNode) => {
      if (currentNode.left) traverse(currentNode.left);
      results.push(currentNode.value);
      if (currentNode.right) traverse(currentNode.right);
    };

    traverse(this.root);
    return results;
  }
}
