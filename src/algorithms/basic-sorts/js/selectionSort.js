export const selectionSortJs = (array) => {
  let min;

  for (let i = 0; i < array.length - 1; i++) {
    min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }

    // swap items if i and min are not equal
    if (i !== min) {
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }
  return array;
};
