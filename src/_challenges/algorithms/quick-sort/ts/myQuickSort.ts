import util = require('util');
import { quickSort } from '@src/algorithms';

export const myQuickSort = (): void => {
  const arr = [4, 6, 1, 7, 3, 2, 5],
    start = performance.now();
  quickSort(arr);
  const end = performance.now();

  console.log(`
quickSort([4,6,1,7,3,2,5])
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(arr, false, null, true)};
`);
};
