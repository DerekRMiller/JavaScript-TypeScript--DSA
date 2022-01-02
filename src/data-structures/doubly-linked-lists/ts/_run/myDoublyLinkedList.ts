import util = require('util');
import { DoublyLinkedList } from 'data-structures/doubly-linked-lists';

export const myDoublyLinkedList = (): void => {
  const myDoublyLinkedList = new DoublyLinkedList(1);
  myDoublyLinkedList.push(2);
  myDoublyLinkedList.push(3);

  const start = performance.now();

  // (add node to end of list) :: O(1)
  // myDoublyLinkedList.push(4);

  // (remove last node) :: O(1)
  // myDoublyLinkedList.pop();

  // (add node to begging of list) :: O(1)
  // myDoublyLinkedList.unshift(100);

  // (remove node from beginning of list) :: O(1)
  // myDoublyLinkedList.shift();

  // (get node value from index) :: O(n)
  // console.log(myDoublyLinkedList.get(1));

  // (get node value from index) :: O(n)
  // myDoublyLinkedList.set(1, 5000);

  // (insert node at index) :: O(n)
  myDoublyLinkedList.insert(1, 5000);

  // (remove node at index) :: O(1)
  // myDoublyLinkedList.remove(1);

  const end = performance.now();

  console.log(`
myDoublyLinkedList.insert(1, 5000)
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(myDoublyLinkedList, false, null, true)}
`);
};
