import { factorialJs } from '@src/algorithms';

export const myFactorialJs = () => {
  const util = require('util'),
    start = performance.now();
  factorialJs(4);
  const end = performance.now();

  console.log(`
factorialJs(4)
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(factorialJs(4), false, null, true)}
`);
};
