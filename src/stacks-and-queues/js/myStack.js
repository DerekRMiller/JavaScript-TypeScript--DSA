import { StackJs } from './Stack';

export const myStackJs = () => {
  const myStack = new StackJs(1),
    util = require('util');
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
