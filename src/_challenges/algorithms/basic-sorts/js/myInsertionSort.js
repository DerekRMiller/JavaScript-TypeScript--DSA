import { insertionSortJs } from '@src/algorithms';

export const myInsertionSortJs = () => {
  const util = require('util'),
    arr = [4, 2, 6, 5, 1, 3],
    start = performance.now();
  insertionSortJs(arr);
  const end = performance.now();

  console.log(`
insertionSortJs([4,2,6,5,1,3])
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(arr, false, null, true)}
`);
};
