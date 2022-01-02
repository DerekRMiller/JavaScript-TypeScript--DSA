# Quick Sort

> For almost sorted data, primitive sorting algorithms might be faster than the more complicated/efficient O(log n) algorithms(merge/quick sort)

## Big O

### Time complexity (n log n)

- O(n) for _for loop_ in pivot
- O(log n) for _for loop_ breaking array down
- combined best case (random data): O(n log n)
- worst case (if array is already/almost sorted): O(n^2)
- For sorting algorithms that sort a mixture of data types, O(n log n) is the fastest. (Exception would be if data is limited to only one type and or number.)
- This algorithm is more efficient/better than basic sorts like: bubbleSort, insertionSort or selectionSort.

### Space Complexity: O(1)

- Working with only one array. (Advantage over mergeSort)

## Description

1. First item is pivot point.

   ```js
   [4, 6, 1, 7, 3, 2, 5];
   ```

1. Compare first item to next item. If next item is larger than pivot, move to next item.

   <!-- prettier-ignore -->
   ```js
   [4, 6, 1, 7, 3, 2, 5]
   ```

1. If next item is less than pivot, exchange places with first larger than item.

   <!-- prettier-ignore -->
   ```js
   [4, 1, 6, 7, 3, 2, 5]
   ```

1. Keep moving through array until finding next less than item. Then exchange places with first larger than item.

   <!-- prettier-ignore -->
   ```js
   [4, 1, 3, 7, 6, 2, 5]
   [(4, 1, 3, 2, 6, 7, 5)]
   ```

1. Swap pivot with last less than item

   <!-- prettier-ignore -->
   ```js
   [2, 1, 3, 4, 6, 7, 5]
   ```

1. Run quickSort again(recursive) on array items left and right of pivot(4).

   <!-- prettier-ignore -->
   ```js
   [2, 1, 3] 4 [6, 7, 5]
   ```

1. quickSort left:

   <!-- prettier-ignore -->
   ```js
   [2, 1, 3]
   ```

   - 1 is less than 2, swap with pivot

   <!-- prettier-ignore -->
   ```js
   [1, 2, 3]
   ```

1. Run quickSort again (recursive)

   ```js
   [1] 2 [3]
   ```

   - only one item in each array, mark as sorted.

1. quickSort left:

   <!-- prettier-ignore -->
   ```js
   [6, 7, 5]
      [6, 5, 7]
         [5, 6, 7]
    ```

1. Run quickSort again (recursive)

   ```js
   [5]6[7]
   ```

   - only one item in each array, mark as sorted.
