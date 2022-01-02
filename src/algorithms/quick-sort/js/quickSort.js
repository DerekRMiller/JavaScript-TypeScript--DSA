const swap = (array, firstIndex, secondIndex) => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

// helper function
const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
  let swapIndex = pivotIndex;

  for (let i = pivotIndex + 1; i <= endIndex; i++) {
    if (array[i] < array[pivotIndex]) {
      swapIndex++;
      swap(array, swapIndex, i);
    }
  }

  swap(array, pivotIndex, swapIndex);
  return swapIndex;
};

export const quickSortJs = (array, left = 0, right = array.length - 1) => {
  if (left < right) {
    const pivotIndex = pivot(array, left, right);
    quickSortJs(array, left, pivotIndex - 1);
    quickSortJs(array, pivotIndex + 1, right);
  }
  return array;
};
