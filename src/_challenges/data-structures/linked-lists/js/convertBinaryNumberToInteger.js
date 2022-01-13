// In a Linked List, convert a Binary Number to an Integer

const Node = (val, next) => {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

const getDecimalValue = (head) => {
  let result = '';
  result += head.val;

  while (head.next) {
    result += head.next.val;
    head = head.next;
  }

  return parseInt(result, 2);
};

// binary 101  = integer 5
export const convertBinaryNumberToIntegerJs = () => {
  const util = require('util');
  const node3 = new Node(1);
  const node2 = new Node(0, node3);
  const node1 = new Node(1, node2);
  const linkedList = node1;
  const start = performance.now();
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
