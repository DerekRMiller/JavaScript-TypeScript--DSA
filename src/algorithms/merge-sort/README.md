# Merge Sort

> For almost sorted data, primitive sorting algorithms might be faster than the more complicated/efficient O(log n) algorithms(merge/quick sort)

## Big O: O(n log n)

- Breaking arrays down into smaller ones: O(log n)
- Putting the arrays back together: O(n)
- Together they equal: O(n log n)
- For sorting algorithms that sort a mixture of data types, O(n log n) is the fastest. (Exception would be if data is limited to only one type and or number.)
- This algorithm is more efficient/better than basic sorts like: bubbleSort, insertionSort or selectionSort.

## Space Complexity: O(n)

Memory increase for each new array created.

## Description

1. Break arrays in half
1. Base Case: when array.length is 1
1. Uses helper function merge() to put arrays together.
