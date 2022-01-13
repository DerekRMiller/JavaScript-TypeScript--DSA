// Merge Two Sorted Linked Lists

const ListNode = (val, next) => {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

const mergeTwoLinkedLists = (list1, list2) => {
  const list3 = new ListNode();
  let prev = list3;

  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
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
export const myMergeTwoLinkedListsJs = () => {
  const util = require('util');
  // linked list 1
  const node3 = new ListNode(4);
  const node2 = new ListNode(2, node3);
  const node1 = new ListNode(1, node2);
  const list1 = node1;
  // linked list 2
  const node6 = new ListNode(4);
  const node5 = new ListNode(3, node6);
  const node4 = new ListNode(1, node5);
  const list2 = node4;
  // start measuring time
  const start = performance.now();
  // merge
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
