import util = require('util');

class Node {
  value: number;
  next: Node | null;

  constructor(value?: number, next?: Node | null) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

const merge = (head1: Node | null, head2: Node | null): null | Node => {
  const result = new Node();
  let current: Node = result;

  while (head1 && head2) {
    if (head1.value < head2.value) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }

    current = current.next;
  }

  current.next = head1 || head2;

  return result.next;
};

const sorted = (list: Node | null): Node | null => {
  if (!list || !list.next) return list;

  let slow: Node | null | undefined = list;
  let fast: Node | null | undefined = list.next;

  while (fast && fast.next) {
    slow = slow?.next;
    fast = fast.next.next;
  }

  if (slow) {
    fast = slow.next;
    slow.next = null;
  }

  return merge(sorted(list), sorted(fast));
};

export const sortLinkedList = (): void => {
  let list = new Node(3);
  const listValues = [16, 7, -5, 20, 1, 0, 3, 1, 100, -9];

  listValues.forEach((val) => {
    list = new Node(val, list);
  });

  const start = performance.now();
  const sort = sorted(list);
  const end = performance.now();

  console.log(`
Sorted List:
Execution time: ${end - start} ms
-----------------------------------------
${util.inspect(sort, false, null, true)}
  `);
};
