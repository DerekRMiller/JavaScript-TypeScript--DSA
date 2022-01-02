/*
  Do the arrays have any matching values?
  What is the most efficient solution?
  [1,3,5]
  [2,4,5]
*/

// not efficient O(n²)
const itemInCommon = (arr1, arr2) => {
  for (let i = 0; i < arr2.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }

  return false;
};

/* eslint-disable one-var */
// Better solution: Create object with keys based on first array values. Then, loop through second array to match values with object keys: O(2n) = O(n)
const itemInCommonObject = (arr1, arr2) => {
  const obj = {};

  for (let i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = true;
  }

  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) return true;
  }

  return false;
};
/* eslint-enable one-var */

export const anyMatchingValues = () => {
  const util = require('util'),
    arrays = [
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

    console.log(`---------------------------------------------
${i === 0 ? 'itemInCommon' : 'itemInCommonObject'}
${util.inspect(arrays, false, null, true)} | result: ${result}
Execution time: ${end - start} ms`);
    if (arrays.length - 1 === i) {
      console.log('---------------------------------------------');
    }
  }
};
