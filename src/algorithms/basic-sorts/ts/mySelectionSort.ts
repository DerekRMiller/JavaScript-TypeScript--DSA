import util = require('util');
import { selectionSort } from './selectionSort';

export const mySelectionSort = (): void => {
  const arr = [4, 2, 6, 5, 1, 3],
    start = performance.now();
  selectionSort(arr);
  const end = performance.now();

  console.log(`
selectionSort([4,2,6,5,1,3])
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(arr, false, null, true)}
`);
};
