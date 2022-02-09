// Merge Arrays

import util = require('util');

const mergeArrays1 = (arr: number[], arr2: number[]) => {
  if (!arr && !arr2) return undefined;
  if (arr.length === 0) return arr2;
  if (arr2.length === 0) return arr;

  return [...arr, ...arr2].sort((a, b) => a - b);
};

const mergeArrays2 = (arr: number[], arr2: number[]) => {
  if (!arr && !arr2) return undefined;
  if (arr.length === 0) return arr2;
  if (arr2.length === 0) return arr;

  arr.push(...arr2);
  arr.sort((a, b) => a - b);

  return arr;
};

const mergeSortedArrays = (arr: number[], arr2: number[]) => {
  if (!arr && !arr2) return undefined;
  if (arr.length === 0) return arr2;
  if (arr2.length === 0) return arr;

  const mergedArray = [];
  let arrItem = arr[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  while (arrItem || arr2Item) {
    if (arr2Item === undefined || arrItem < arr2Item) {
      mergedArray.push(arrItem);
      arrItem = arr[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
};

export const myMergeArrays = () => {
  const arr = [1, 2, 5, 7, 8, 10, 34];
  const arr2 = [-1, 0, 1, 2, 6, 18];

  const start = performance.now();
  const mergeArr = mergeArrays1(arr, arr2);
  const end = performance.now();

  console.log(`
------------------------------------------------
Input:
${util.inspect(arr, false, null, true)}
${util.inspect(arr2, false, null, true)}
------------------------------------------------
Output:
[time: ${end - start} ms]
${util.inspect(mergeArr, false, null, true)}
------------------------------------------------
  `);
};
