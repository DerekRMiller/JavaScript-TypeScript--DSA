import util = require('util');
import { LinkedList } from '@src/data-structures/linked-lists';

const sortMergeTwoLinkedLists = (list1: LinkedList, list2: LinkedList): LinkedList => {
  // TODO: add edge cases

  const arr: number[] = [];

  if (list1.head) {
    while (list1.head.next) {
      arr.push(list1.head.value);

      list1.head = list1.head.next;

      if (list1.head.next === null) {
        arr.push(list1.head.value);
      }
    }
  }

  if (list2.head) {
    while (list2.head.next) {
      arr.push(list2.head.value);

      list2.head = list2.head.next;

      if (list2.head.next === null) {
        arr.push(list2.head.value);
      }
    }
  }

  arr.sort((a, b) => a - b);
  const list3 = new LinkedList(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    list3.push(arr[i]);
  }

  return list3;
};

export const mySortMergeTwoLinkedLists = (): void => {
  const list1 = new LinkedList(6);
  const list2 = new LinkedList(3);

  list1.push(5);
  list1.push(2);

  list2.push(1);
  list2.push(4);

  const start = performance.now();
  const arr = sortMergeTwoLinkedLists(list1, list2);
  const end = performance.now();

  console.log(`
sortMergeTwoLinkedLists({6,5,2}, {3,1,4})
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(arr, false, null, true)}
`);
};
