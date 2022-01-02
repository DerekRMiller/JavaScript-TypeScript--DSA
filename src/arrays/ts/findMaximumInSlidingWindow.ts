const findMaxSlidingWindow = (arr: number[], windowSize: number): number[] => {
  const result: number[] = [];

  // if array is empty, return empty array
  if (arr.length === 0) {
    return result;
  }

  // if window size is greater than array return empty array
  if (windowSize > arr.length) {
    return result;
  }

  const window_: number[] = [];

  // find out max for first window
  for (let i = 0; i < windowSize; i++) {
    while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }
    window_.push(i);
  }

  result.push(arr[window_[0]]);

  for (let i = windowSize; i < arr.length; i++) {
    // remove all numbers that are smaller than current number
    // from the tail of list
    while (window_.length > 0 && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }

    // remove first number if it doesn't fall in the window anymore
    if (window_.length > 0 && window_[0] <= i - windowSize) {
      window_.shift();
    }

    window_.push(i);
    result.push(arr[window_[0]]);
  }

  return result;
};

export const findMaximumInSlidingWindow = (): void => {
  // console.log("Array = " + array);
  // console.log("Max = " + findMaxSlidingWindow(array, 3));

  const array1 = [10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67];
  // console.log("Array = " + array1);
  console.log('Max = ' + findMaxSlidingWindow(array1, 5));
};
