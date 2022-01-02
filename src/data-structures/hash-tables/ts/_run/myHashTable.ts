import util = require('util');
import { HashTable } from 'data-structures/hash-tables';

const myHashTable = (): void => {
  const myHashTable = new HashTable(),
    start = performance.now();
  // set some items
  myHashTable.set('compressor', 24);
  myHashTable.set('eq', 40);
  myHashTable.set('chorus', 8);
  myHashTable.set('delay', 6);
  myHashTable.set('reverb', 4);
  const end = performance.now();

  console.log(`
myHashTable.set()
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
get all keys: ${myHashTable.keys()}
get 'lumber': ${myHashTable.get('lumber')}
-----------------------------------------
Result:
${util.inspect(myHashTable, false, null, true)}
`);
};

export { HashTable, myHashTable };
