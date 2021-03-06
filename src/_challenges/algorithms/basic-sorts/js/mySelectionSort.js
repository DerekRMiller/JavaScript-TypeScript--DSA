import { selectionSortJs } from '@src/algorithms';

export const mySelectionSortJs = () => {
  const util = require('util');
  const arr = [4, 2, 6, 5, 1, 3];
  const start = performance.now();
  selectionSortJs(arr);
  const end = performance.now();

  console.log(`
selectionSortJs([4,2,6,5,1,3])
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(arr, false, null, true)}
`);
};
