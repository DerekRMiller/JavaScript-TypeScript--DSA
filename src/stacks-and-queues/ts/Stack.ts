import { NodeN as Node } from '_shared';

export class Stack {
  top: Node | null;
  length: number;

  constructor(value: number) {
    const newNode = new Node(value);
    this.top = newNode;
    this.length = 1;
  }

  // Add node to top of stack :: O(1)
  push(value: number): this {
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
  pop(): Node | undefined {
    if (this.length === 0 || !this.top) return undefined;

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;

    this.length--;
    return temp;
  }
}
