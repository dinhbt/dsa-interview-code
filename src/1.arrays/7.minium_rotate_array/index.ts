export default class MiniumRotateArray {
  linearSearch = (array: number[]) => {
    if (array.length === 0) return 0;

    let min = array[0];

    for (let i = 1; i < array.length; i++) {
      min = Math.min(min, array[i]);
    }

    return min;
  };

  /**
   * @param array
   * @returns
   */

  binarySearch = (array: number[]) => {
    if (array.length === 0) return 0;

    let right = array.length - 1,
      left = 0;

    while (left < right) {
      const mid = Math.floor((right - left) / 2);

      if (array[left] < array[right]) return array[left];

      if (array[left] < array[mid]) {
        if (array[left] < array[right]) {
          right = mid - 1;
        } else {
          left = mid;
        }
      } else {
        if (array[left] > array[right]) {
          left = mid;
        } else {
          right = mid;
        }
      }
    }
  };
}
