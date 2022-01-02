import util = require('util');
import { LinkedList } from './LinkedList';

export const myLinkedList = (): void => {
  const list = new LinkedList(1);
  list.push(2);
  list.push(3);

  const start = performance.now();

  // Add node to end of linked list :: O(1)
  // list.push(4);

  // Remove last node of linked list :: 0(n)
  // list.pop();

  // Add node to beginning of linked list :: O(1)
  // list.unshift(0);

  // Remove node from beginning of linked list :: 0(1)
  // list.shift();

  // Get node by index :: O(n)
  // list.get(1);

  // Set node value by index :: 0(n)
  // list.set(1, 5000);

  // Insert node at index :: 0(n)
  // list.insert(1, 1000);

  // Remove node by index :: O(1)
  // list.remove(1);

  // Reverse linked list :: O(1)
  list.reverse();

  const end = performance.now();

  console.log(`
list.reverse()
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(list, false, null, true)}
`);
};
