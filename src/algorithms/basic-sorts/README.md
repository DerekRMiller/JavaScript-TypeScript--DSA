# Basic Sorting Algorithms

> For almost sorted data, primitive sorting algorithms might be faster than the more complicated/efficient O(log n) algorithms(merge/quick sort)

---

## Bubble Sort

### Big O: O(n^2)

### Space Complexity: O(1)

Sorts the array in place. Does not create additional copies of the array.

### Description

Move through each item and compare if adjacent sibling is greater than or less than. If sibling is less than, move to the right.

<!-- prettier-ignore -->
```js
[4,2,6,5,1,3]
[2,4,6,5,1,3]

[2,4,6,5,1,3]
[2,4,5,6,1,3]

[2,4,5,6,1,3]
[1,2,4,5,6,3]

[1,2,4,5,6,3]
[1,2,3,4,5,6]
```

---

## Insertion Sort

### Big O: O(n^2)

_Insertion Sort is O(n) with, or almost, sorted data._

### Space Complexity: O(1)

Sorts the array in place. Does not create additional copies of the array.

### Description

1. `[4,2,6,5,1,3]`
1. Insertion sort always starts with the second item, then compares the item before it. If current item is less than before item, swap positions.
   `[2,4,6,5,1,3]`
1. Third item is selected next (6). It is not less than 4, so move on to next.
1. Fourth item is selected(5). It is less than 6, so it swaps places.
   `[2,4,5,6,1,3]`
1. Continue through rest of array.

---

## Selection Sort

### Big O: O(n^2)

### Space Complexity: O(1)

Sorts the array in place. Does not create additional copies of the array.

### Description

1. `[4,2,6,5,1,3]`
1. Iterate through loop comparing first item with subsequent item. If compared item is smaller, store its index in a _min_ variable. Continue comparing through the array, element is swapped with the smallest element found (index stored in min variable).
