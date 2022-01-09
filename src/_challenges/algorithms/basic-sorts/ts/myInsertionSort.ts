import util = require('util');
import { insertionSort } from '@src/algorithms';

export const myInsertionSort = (): void => {
  const arr = [4, 2, 6, 5, 1, 3],
    start = performance.now();
  insertionSort(arr);
  const end = performance.now();

  console.log(`
insertionSort([4,2,6,5,1,3])
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(arr, false, null, true)}
`);
};
