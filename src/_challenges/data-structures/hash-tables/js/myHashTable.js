import { HashTable } from '@src/data-structures/hash-tables';

export const myHashTableJs = () => {
  const util = require('util'),
    myHashTable = new HashTable(),
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
