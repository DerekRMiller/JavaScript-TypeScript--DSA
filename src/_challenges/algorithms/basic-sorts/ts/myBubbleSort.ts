import util = require('util');
import { bubbleSort } from '@src/algorithms';

export const myBubbleSort = (): void => {
  const arr = [4, 2, 6, 5, 1, 3],
    start = performance.now();
  bubbleSort(arr);
  const end = performance.now();

  console.log(`
bubbleSort([4,2,6,5,1,3])
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(arr, false, null, true)}
`);
};
