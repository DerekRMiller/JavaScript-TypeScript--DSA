/* 
  In a key value string array, sort and sum by key:
  let arr = ['a:3', 'd:-2', 'f:4', 'e:1', 'c:9', 'b:0', 'c:7', 'd:5', 'b:12', 'f:-23'];
  let result = ['a:3', 'b:12', 'c:16', 'd:3', 'e:1', 'f:-19'];
*/

import util = require('util');

const arrSortSumByKey = (arr: string[]): string[] => {
  const obj: { [key: string]: number } = {},
    newArr: string[] = [];

  for (let i = 0; i < arr.length; i++) {
    const pair = arr[i].split(':'),
      key: string = pair[0],
      value = parseInt(pair[1]);

    if (key in obj) {
      obj[key] += value;
    } else {
      obj[key] = value;
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
  const arr: string[] = ['a:3', 'd:-2', 'f:4', 'e:1', 'c:9', 'b:0', 'c:7', 'd:5', 'b:12', 'f:-23'],
    start = performance.now(),
    arrSort = arrSortSumByKey(arr),
    end = performance.now();

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
