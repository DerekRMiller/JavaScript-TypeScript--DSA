class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class StackJs {
  constructor(value) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  // Add node to top of stack :: O(1)
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
    }

    this.length++;
    return this;
  }

  // Remove node from top of stack :: O(1)
  pop() {
    if (this.length === 0) return undefined;

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;
    return temp;
  }
}
