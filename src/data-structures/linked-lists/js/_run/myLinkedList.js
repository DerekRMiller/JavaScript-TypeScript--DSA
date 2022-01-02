import { LinkedListJs } from 'data-structures/linked-lists';

export const myLinkedListJs = () => {
  const util = require('util'),
    myLinkedList = new LinkedListJs(1);
  myLinkedList.push(2);
  myLinkedList.push(3);

  const start = performance.now();

  // Add node to end of linked list :: O(1)
  // myLinkedList.push(4);

  // Remove last node of linked list :: 0(n)
  // myLinkedList.pop();

  // Add node to beginning of linked list :: O(1)
  // myLinkedList.unshift(0);

  // Remove node from beginning of linked list :: 0(1)
  // myLinkedList.shift();

  // Get node by index :: O(n)
  // myLinkedList.get(1);

  // Set node value by index :: 0(n)
  // myLinkedList.set(1, 5000);

  // Insert node at index :: 0(n)
  // myLinkedList.insert(1, 1000);

  // Remove node by index :: O(1)
  // myLinkedList.remove(1);

  // Reverse linked list :: O(1)
  myLinkedList.reverse();

  const end = performance.now();

  console.log(`
myLinkedList.reverse()
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(myLinkedList, false, null, true)}
`);
};
