import { quickSortJs } from '@src/algorithms';

export const myQuickSortJs = () => {
  const util = require('util'),
    arr = [4, 6, 1, 7, 3, 2, 5],
    start = performance.now();
  quickSortJs(arr);
  const end = performance.now();

  console.log(`
quickSortJs([4,6,1,7,3,2,5])
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(arr, false, null, true)};
`);
};
