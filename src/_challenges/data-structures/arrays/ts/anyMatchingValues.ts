/*
  Do the arrays have any matching values?
  What is the most efficient solution?
  [1,3,5]
  [2,4,5]
*/

import util = require('util');

// Not efficient O(n²)
const itemInCommon = (arr1: number[], arr2: number[]): boolean => {
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }

  return false;
};

// Better solution: Create object with keys based on first array values. Then, loop through second array to match values with object keys: O(2n) = O(n)
const itemInCommonObject = (arr1: number[], arr2: number[]): boolean => {
  const obj: { [key: number]: boolean } = {};

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }

  return false;
};

export const anyMatchingValues = (): void => {
  const arrays = [
    [1, 3, 5],
    [2, 4, 5]
  ];
  let result = false;

  // Show timing results for both functions
  for (let i = 0; i < arrays.length; i++) {
    const start = performance.now();
    if (i === 0) {
      result = itemInCommon(arrays[0], arrays[1]);
    }
    result = itemInCommonObject(arrays[0], arrays[1]);
    const end = performance.now();

    console.log(`
anyMatchingValues
---------------------------------------------
${i === 0 ? 'itemInCommon' : 'itemInCommonObject'}
${util.inspect(arrays, false, null, true)} | result: ${result}
Execution time: ${end - start} ms`);
    if (arrays.length - 1 === i) {
      console.log('---------------------------------------------');
    }
  }
};
