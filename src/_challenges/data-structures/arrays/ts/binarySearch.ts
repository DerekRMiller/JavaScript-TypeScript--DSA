import util = require('util');

/* 

  Implement Binary Search on a Sorted Array

  Recursive solution:
  Time complexity: O(log n)
  Space complexity: O(log n)
  
  Divide and Conquer

   L                  M                        H
  [1, 2, 4, 7, 8, 12, 15, 19, 24, 50, 69, 80, 100]

  (number < m )
   L     M     H
  [1, 2, 4, 7, 8, 12, 15, 19, 24, 50, 69, 80, 100]

  (number > m )
            L  M  H
  [1, 2, 4, 7, 8, 12, 15, 19, 24, 50, 69, 80, 100]

  (number > m )
                  L
                  M
                  H
  [1, 2, 4, 7, 8, 12, 15, 19, 24, 50, 69, 80, 100]

*/

const binarySearchRec = (
  arr: number[],
  number: number,
  low: number,
  high: number
): number | undefined => {
  // if submitted number doesn't exist in array, return -1
  if (low > high) {
    return -1;
  }

  // Pointer: find the current middle index value (low plus the value of high - low divided by 2).
  const mid = low + Math.floor((high - low) / 2);

  // With current middle index, select array value. If value is equal to number argument value, return it.
  if (arr[mid] === number) {
    return mid;

    // From middle, select left half of current array range: if number argument value is less than current middle pointer array value, move high pointer to middle -1 and call the function again with new high pointer value
  } else if (number < arr[mid]) {
    return binarySearchRec(arr, number, low, mid - 1);

    // From middle, select right half of current array range: if number argument value  is greater than current middle pointer array value, move low pointer to middle + 1 and call the function again with new low pointer value
  } else if (number > arr[mid]) {
    return binarySearchRec(arr, number, mid + 1, high);
  }

  return undefined;
};

export const myBinarySearch = () => {
  const arr = [1, 2, 4, 7, 8, 12, 15, 19, 24, 50, 69, 80, 100];

  const start = performance.now();
  const myPlayground = binarySearchRec(arr, 12, 0, arr.length - 1);
  const end = performance.now();

  console.log(`
------------------------------------------------
Input: ${util.inspect(arr, false, null, true)}
------------------------------------------------
Output:
[time: ${end - start} ms]
${util.inspect(myPlayground, false, null, true)}
------------------------------------------------
  `);
};
