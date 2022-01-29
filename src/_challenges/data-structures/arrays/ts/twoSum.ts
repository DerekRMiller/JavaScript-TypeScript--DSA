/*
  Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
  You may assume that each input would have exactly one solution, and you may not use the same element twice.
  You can return the answer in any order.

  Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  Example 3:
  Input: nums = [3,3], target = 6
  Output: [0,1]
*/

import util = require('util');

const twoSum = (nums: number[], target: number): number[] | null => {
  const obj: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    // target number minus current number in array
    const other = target - nums[i];

    // if other is a key in object, return its value and current array index to new array
    if (other in obj) {
      return [obj[other], i];
    }

    // if other is not a key in object, set current array value as prop key and index as prop value.
    obj[nums[i]] = i;
  }

  return null;
};

export const myTwoSum = (): void => {
  const arr = [3, 15, 6, 7];
  const target = 9;

  const start = performance.now();
  const myTwoSum = twoSum(arr, target);
  const end = performance.now();

  console.log(`
Array: [${arr}], Target: ${target}
--------------------------------------------------------
Result: ${util.inspect(myTwoSum, false, null, true)}
--------------------------------------------------------
Execution time: ${end - start} ms
--------------------------------------------------------`);
};
