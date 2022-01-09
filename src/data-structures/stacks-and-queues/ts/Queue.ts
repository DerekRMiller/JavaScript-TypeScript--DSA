import { NodeN as Node } from '@shared/index';

export class Queue {
  first: Node | null;
  last: Node | null;
  length: number;

  constructor(value: number) {
    const newNode = new Node(value);
    this.first = newNode;
    this.last = newNode;
    this.length = 1;
  }

  // (add node end of queue) :: O(1)
  enqueue(value: number): this {
    const newNode = new Node(value);

    if (this.length === 0 || !this.last) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  // (remove node from beginning of queue) :: O(1)
  dequeue(): Node | undefined {
    if (this.length === 0 || !this.first) return undefined;
    const temp = this.first;

    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
      temp.next = null;
    }

    this.length--;
    return temp;
  }
}
