// Reverse strings

import util = require('util');

const reverse1 = (str: string) => {
  if (undefined || str.length < 2 || typeof str !== 'string') return undefined;

  return [...str].reverse().toString();
};

const reverse2 = (str: string) => {
  if (undefined || str.length < 2 || typeof str !== 'string') return undefined;

  return str.split('').reverse().toString();
};

const reverse3 = (str: string) => {
  if (undefined || str.length < 2 || typeof str !== 'string') return undefined;

  const backwards = [];
  const totalItems = str.length - 1;

  for (let i = totalItems; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
};

export const myStrings = () => {
  const string = 'Reverse this really interesting sentence.';

  const start = performance.now();
  const myReverse = reverse1(string);
  const end = performance.now();

  console.log(`
------------------------------------------------
Input:
${util.inspect(string, false, null, true)}
------------------------------------------------
Output:
[time: ${end - start} ms]
${util.inspect(myReverse, false, null, true)}
------------------------------------------------
  `);
};
