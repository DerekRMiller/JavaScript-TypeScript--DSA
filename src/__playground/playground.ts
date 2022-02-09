/* 
  Playground: temporary area to work on immediate ideas amd or practice solutions.
*/

/* 
  Write out approach
*/

import util = require('util');

const playground = (arr: number[], arr2: number[]) => {
  if (!arr && !arr2) return undefined;
  if (arr.length === 0) return arr2;
  if (arr2.length === 0) return arr;

  return [...arr, ...arr2].sort((a, b) => a - b);
};

export const myPlayground = () => {
  const arr = [1, 2, 5, 7, 8, 10, 34];
  const arr2 = [-1, 0, 1, 2, 99, 6, 18];

  const start = performance.now();
  const myPlayground = playground(arr, arr2);
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
