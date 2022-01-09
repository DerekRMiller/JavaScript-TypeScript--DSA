import util = require('util');
import { factorial } from '@src/algorithms';

export const myFactorial = (): void => {
  const start = performance.now();
  factorial(4);
  const end = performance.now();

  console.log(`
factorial(4)
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(factorial(4), false, null, true)}
`);
};
