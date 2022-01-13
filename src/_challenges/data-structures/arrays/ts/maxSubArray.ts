import util = require('util');

const maxSubArr = (numbers: number[]): number => {
  let prev = 0;
  let max = 0;

  for (let i = 0; i < numbers.length; i++) {
    prev = Math.max(prev + numbers[i], numbers[i]);
    max = Math.max(max, prev);
  }

  return max;
};

// const maxSubArr = (numbers: number[]): number => {
//   for (let i = 1; i < numbers.length; i++) {
//     numbers[i] = Math.max(numbers[i], numbers[i] + numbers[i - 1]);
//   }
//   return Math.max(...numbers);
// }

// Answer: 6, 1, 23
export const maxSubArray = (): void => {
  const arrays = [[-2, 1, -3, 4, -1, 2, 1, -5, 4], [1], [5, 4, -1, 7, 8]];
  let max: number;

  for (let i = 0; i < arrays.length; i++) {
    const start = performance.now();
    max = maxSubArr(arrays[i]);
    const end = performance.now();

    console.log(`
maxSubArray
-----------------------------------------
${util.inspect(arrays[i], false, null, true)} | result: ${util.inspect(max, false, null, true)}
Execution time: ${end - start} ms`);
    if (arrays.length - 1 === i) {
      console.log('-----------------------------------------');
    }
  }
};
