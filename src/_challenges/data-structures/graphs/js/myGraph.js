import { GraphJs } from '@src/data-structures/graphs';

/*

A - B
| \ |
C - D

// Remove D vertex
A - B
|
C

*/

export const myGraphJs = () => {
  const util = require('util'),
    myGraph = new GraphJs(),
    start = performance.now();

  // Add vertex
  myGraph.addVertex('A');
  myGraph.addVertex('B');
  myGraph.addVertex('C');
  myGraph.addVertex('D');

  // Add edges
  myGraph.addEdge('A', 'B');
  myGraph.addEdge('A', 'C');
  myGraph.addEdge('A', 'D');
  myGraph.addEdge('B', 'D');
  myGraph.addEdge('C', 'D');

  // Remove edge
  // myGraph.removeEdge("A", "B");

  // Remove vertex
  myGraph.removeVertex('D');

  const end = performance.now();

  console.log(`
myGraph: addVertex, addEdge, removeVertex
-----------------------------------------
Execution time: ${end - start} ms
-----------------------------------------
Result:
${util.inspect(myGraph, false, null, true)}
`);
};
