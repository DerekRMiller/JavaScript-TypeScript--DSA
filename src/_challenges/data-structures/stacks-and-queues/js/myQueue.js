import { QueueJs } from '@src/data-structures/stacks-and-queues';

export const myQueueJs = () => {
  const util = require('util'),
    myQueue = new QueueJs(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);

  const start = performance.now();

  // Add node end of queue :: O(1)
  // myQueue.enqueue(5000);

  // Remove node from beginning of queue :: O(1)
  myQueue.dequeue();

  const end = performance.now();

  console.log(`
myQueue.dequeue()
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(myQueue, false, null, true)}
`);
};
