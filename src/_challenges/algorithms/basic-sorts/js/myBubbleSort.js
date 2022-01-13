import { bubbleSortJs } from '@src/algorithms';

export const myBubbleSortJs = () => {
  const util = require('util');
  const arr = [4, 2, 6, 5, 1, 3];
  const start = performance.now();

  console.log(bubbleSortJs(arr));

  const end = performance.now();
  console.log(`
bubbleSortJs([4,2,6,5,1,3])
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(arr, false, null, true)}
`);
};
