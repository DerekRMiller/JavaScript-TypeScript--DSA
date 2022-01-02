# Binary Search Tree

```m
      14
   /      \
  08      20
 /  \    /  \
06  12  18  21
```

## Big O

### Time complexity O(n)

- Worst Case Scenario O(n): tree descends linearly down one side (no branching).
- Best Case Scenario O(log n): tree branches and is balanced (_Divide and Conquer_)

> - If data/access pattern is linear, linked list would be a better option.
> - Adding a node to the end of a linked list is faster than a tree.

Comparing time complexity of Linked List and Binary Search Tree methods: insert, lookup and remove

```m
    Linked List              Binary Search Tree
      *O(1)       insert()        O(log n)
       O(n)       lookup()       *O(log n)
       O(n)       remove()       *O(log n)
```
