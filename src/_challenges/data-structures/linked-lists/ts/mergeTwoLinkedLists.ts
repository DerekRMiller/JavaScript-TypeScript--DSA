// Merge Two Sorted Linked Lists

import util = require('util');

class Node {
  value: number;
  next: Node | null;

  constructor(value?: number, next?: Node | null) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

const mergeTwoLinkedLists = (list1: Node | null, list2: Node | null): Node | null => {
  const list3 = new Node();
  let prev = list3;

  while (list1 !== null && list2 !== null) {
    if (list1.value <= list2.value) {
      prev.next = list1;
      list1 = list1.next;
    } else {
      prev.next = list2;
      list2 = list2.next;
    }
    prev = prev.next;
  }

  if (list1 === null) {
    prev.next = list2;
  }

  if (list2 === null) {
    prev.next = list1;
  }

  return list3.next;
};

// merge linked list = 1,1,2,3,4,4
export const myMergeTwoLinkedLists = (): void => {
  // linked list 1
  const node3 = new Node(3);
  const node2 = new Node(2, node3);
  const node1 = new Node(1, node2);
  const list1 = node1;
  // linked list 2
  const node6 = new Node(6);
  const node5 = new Node(5, node6);
  const node4 = new Node(4, node5);
  const list2 = node4;
  // start measuring time
  const start = performance.now();
  const merged = mergeTwoLinkedLists(list1, list2);
  const end = performance.now();

  console.log(`
mergeTwoLists(list1, list2)
--------------------------------------------------------
Execution time: ${end - start} ms
--------------------------------------------------------
mergeTwoLists(list1, list2)
${util.inspect(merged, false, null, true)}
`);
};
