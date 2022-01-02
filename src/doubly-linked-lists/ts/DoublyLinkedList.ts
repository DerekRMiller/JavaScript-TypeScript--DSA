class Node {
  value: number;
  next: Node | null;
  prev: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor(value: number) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }

  // (add node to end of list) :: 0(1)
  push(value: number): this {
    const newNode = new Node(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  // (remove last node) :: O(1)
  pop(): Node | undefined | null {
    if (!this.head) return undefined;
    const temp = this.tail;

    // if one item in list
    if (this.length === 1 || !this.tail || !temp || !this.tail.prev) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }

  // (add node to beginning of list) :: O(1)
  unshift(value: number): this {
    const newNode = new Node(value);

    if (!this.head || !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
    return this;
  }

  // (remove node from beginning of list) :: O(1)
  shift(): Node | undefined {
    if (!this.head) return undefined;

    const temp = this.head;

    if (this.length === 1 || !this.head.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      temp.next = null;
    }

    this.length--;
    return temp;
  }

  // (get node value from index) :: O(n)
  get(index: number): Node | null | undefined {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    let temp = this.head;

    // optimize: if index is before half object length
    if (index < this.length / 2) {
      for (let i = 0; i < index; i++) {
        if (temp) {
          temp = temp.next;
        }
      }
    } else {
      temp = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        if (temp) {
          temp = temp.prev;
        }
      }
    }

    return temp;
  }

  // (set node value from index) :: O(n + 1)
  set(index: number, value: number): boolean {
    const temp = this.get(index);

    if (temp) {
      temp.value = value;
      return true;
    }

    return false;
  }

  // (insert node at index) :: O(n + 1)
  insert(index: number, value: number): this | boolean {
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(value),
      before = this.get(index - 1);

    if (before) {
      const after = before.next;
      before.next = newNode;
      newNode.prev = before;
      newNode.next = after;
      if (after) {
        after.prev = newNode;
      }
      this.length++;

      return true;
    }

    return false;
  }

  remove(index: number): Node | null | undefined {
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    if (index < 0 || index > this.length) return undefined;

    const temp = this.get(index);

    if (temp && temp.prev && temp.next) {
      temp.prev.next = temp.next;
      temp.next.prev = temp.prev;
      temp.next = null;
      temp.prev = null;

      this.length--;

      return temp;
    }

    return undefined;
  }
}
