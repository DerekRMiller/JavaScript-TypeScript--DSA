# Stacks & Queues

## Stacks

## Queues

> Queue: list of nodes queued up to the last line (FIFO).

```m
         F     L                               array
  O(1) | 9-4-4-3 | O(1)               O(n) | [9,4,4,3] | O(1)
```

### Advantage of queue over array

- Time complexity to add node to top, or remove node from bottom, is O(1).
- Array will always have a time complexity of O(n) for either shift or unshift (adding or removing node at the beginning of array).
