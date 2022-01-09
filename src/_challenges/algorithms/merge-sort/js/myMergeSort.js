import { mergeSortJs } from '@src/algorithms';

export const myMergeSortJs = () => {
  const util = require('util'),
    arr = [15, 7, 9, 12, 1, 5, 2, 9, 24, 54],
    start = performance.now();
  mergeSortJs(arr);
  const end = performance.now();

  console.log(`
mergeSortJs([15,7,9,12,1,5,2,9,24,54])
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(mergeSortJs(arr), false, null, true)}
`);
};
