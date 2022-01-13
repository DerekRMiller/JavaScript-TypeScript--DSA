import util = require('util');
import { mergeSort } from '@src/algorithms';

export const myMergeSort = (): void => {
  const arr = [15, 7, 9, 12, 1, 5, 2, 9, 24, 54];
  const start = performance.now();
  mergeSort(arr);
  const end = performance.now();

  console.log(`
mergeSort([15,7,9,12,1,5,2,9,24,54])
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(mergeSort(arr), false, null, true)}
`);
};
