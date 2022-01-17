/* 
  In a key and number value string array, sort and sum by key:
  const arr = ['a:3', 'd:-2', 'f:4', 'e:1', 'c:9', 'b:0', 'c:7', 'd:5', 'b:12', 'f:-23'];
  const newArr = ['a:3', 'b:12', 'c:16', 'd:3', 'e:1', 'f:-19'];
*/

import util = require('util');

const notKeyNumberValuePair =
  'Array string elements must be formatted as a key and number value pair.';

const arrSortSumByKey = (arr: string[]) => {
  const obj: { [key: string]: number } = {};
  const newArr: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match('(:.*){2}')) return notKeyNumberValuePair;

    const pair = arr[i].split(':');
    const value = parseInt(pair[1]);

    if (isNaN(value)) return notKeyNumberValuePair;

    if (pair[0] in obj) {
      obj[pair[0]] += value;
    } else {
      obj[pair[0]] = value;
    }
  }

  Object.keys(obj)
    .sort()
    .forEach((key) => {
      newArr.push(key + ':' + obj[key]);
    });

  return newArr;
};

export const myArrSortSumByKey = () => {
  const arr: string[] = ['a:3', 'd:-2', 'f:4', 'e:1', 'c:9', 'b:0', 'c:7', 'd:5', 'b:12', 'f:-23'];
  const start = performance.now();
  const arrSort = arrSortSumByKey(arr);
  const end = performance.now();

  console.log(`
------------------------------------------------
Original
------------------------------------------------
${util.inspect(arr, false, null, true)}
------------------------------------------------
Sorted and summed by key
[time: ${end - start} ms]
------------------------------------------------
${util.inspect(arrSort, false, null, true)}
------------------------------------------------
  `);
};
