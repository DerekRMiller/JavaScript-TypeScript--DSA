const swap = (array: number[], firstIndex: number, secondIndex: number): void => {
  const temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

// helper function
const pivot = (array: number[], pivotIndex = 0, endIndex = array.length - 1): number => {
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

export const quickSort = (array: number[], left = 0, right = array.length - 1): number[] => {
  if (left < right) {
    const pivotIndex = pivot(array, left, right);
    quickSort(array, left, pivotIndex - 1);
    quickSort(array, pivotIndex + 1, right);
  }

  return array;
};
