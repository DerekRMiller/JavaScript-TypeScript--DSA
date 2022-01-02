// In a Linked List, convert a Binary Number to an Integer

import util = require('util');

class Node {
  value: number;
  next: Node | null;

  constructor(value?: number, next?: Node | null) {
    this.value = value === undefined ? 0 : value;
    this.next = next === undefined ? null : next;
  }
}

const getDecimalValue = (head: Node | null): number => {
  let current = head,
    string = '';

  while (current) {
    // add all the values as string to `str` variable
    string += current.value.toString();
    current = current.next;
  }

  // convert to base 2
  return parseInt(string, 2);
};

// binary 101  = integer 5
export const convertBinaryNumberToInteger = (): void => {
  const node3 = new Node(1),
    node2 = new Node(0, node3),
    node1 = new Node(1, node2),
    linkedList = node1,
    start = performance.now();

  getDecimalValue(linkedList);

  const end = performance.now();

  console.log(`
getDecimalValue(linkedList) result: ${getDecimalValue(linkedList)}
--------------------------------------------------------
Execution time: ${end - start} ms
--------------------------------------------------------
Linked List
${util.inspect(linkedList, false, null, true)}
`);
};
