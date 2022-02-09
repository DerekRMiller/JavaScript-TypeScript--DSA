import { NodeN as Node } from '@shared/index';

export class LinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor(value: number) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // (add node to end of linked list) :: O(1)
  push(value: number): this {
    const newNode = new Node(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // (remove last node of linked list) :: 0(n)
  pop(): Node | undefined {
    if (!this.head) return undefined;

    let temp = this.head;
    let pre = this.head;

    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }

    this.tail = pre;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return temp;
  }

  // (add node to beginning of linked list) :: O(1)
  unshift(value: number): this {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // (remove node from beginning of linked list) :: 0(1)
  shift(): Node | undefined {
    if (!this.head) return undefined;

    const temp = this.head;

    this.head = this.head.next;
    temp.next = null;
    this.length--;

    if (this.length === 0) {
      this.tail = null;
    }

    temp.next = null;
    return temp;
  }

  // (Get node by index) :: O(n)
  get(index: number): Node | null | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;

    for (let i = 0; i < index; i++) {
      if (temp) {
        temp = temp.next;
      }
    }

    return temp;
  }

  // (set node value by index) :: 0(1)
  set(index: number, value: number): boolean {
    const temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  // (insert node at index) :: 0(1)
  insert(index: number, value: number): boolean | this {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value);
    const temp = this.get(index - 1);

    if (temp) {
      newNode.next = temp.next;
      temp.next = newNode;
    }

    this.length++;
    return true;
  }

  // (remove node by index) :: O(1)
  remove(index: number): Node | null | undefined | boolean {
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();
    if (index < 0 || index > this.length) return false;

    const before = this.get(index - 1);

    if (before) {
      const temp = before.next;

      if (temp) {
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
      }
    }

    return false;
  }

  middle(): Node | null | undefined {
    let slow = this.get(0);
    let fast = slow;

    while (fast && fast.next) {
      if (slow) {
        slow = slow.next;
      }
      fast = fast.next.next;
    }

    return slow;
  }

  // (reverse linked list) :: O(n)
  reverse(): this {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    let next = temp?.next;
    let prev: Node | null = null;

    for (let i = 0; i < this.length; i++) {
      if (temp !== null) {
        next = temp.next;
        temp.next = prev;
        prev = temp;
        temp = next;
      }
    }

    return this;
  }

  // add sort

  sort(): this {
    return this;
  }
}
