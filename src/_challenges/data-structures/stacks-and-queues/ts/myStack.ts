import util = require('util');
import { Stack } from '@src/data-structures/stacks-and-queues';

export const myStack = (): void => {
  const myStack = new Stack(1);
  myStack.push(2);
  myStack.push(3);

  const start = performance.now();
  myStack.pop();
  const end = performance.now();

  console.log(`
myStack.pop()
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(myStack, false, null, true)}
`);
};
