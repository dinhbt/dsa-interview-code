export default class PairWithTheGivenSum {
  /**
   * Solution: 1 Time complexity: O(n^2)
   * @param array
   * @param target
   * @returns
   */
  nestedLoopSum = (array: number[], target: number) => {
    if (array.length === 0 || !target) return false;

    const len = array.length;

    for (let i = 0; i < len; i++) {
      for (let j = i + 1; j < len; j++) {
        if (array[i] + array[j] === target) {
          return true;
        }
      }
    }

    return false;
  };

  private quicksort = (array: number[]): number[] => {
    if (array.length <= 1) return array;

    const privot = array[0];
    const left = [],
      right = [];

    for (let i = 1; i <= array.length - 1; i++) {
      if (array[i] < privot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }

    return [...this.quicksort(left), privot, ...this.quicksort(right)];
  };

  /**
   *
   * @param array must be sorted
   * @param target
   * @returns
   */
  private binarysearch = (array: number[], target: number) => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);

      if (array[middle] === target) return middle;

      if (target > array[middle]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }

    return -1;
  };

  /**
   * Solution: 2 Sorting and Binary Search
   * @param array
   * @param target
   * @returns
   */
  sortingBinarySearchSum = (array: number[], target: number) => {
    if (array.length === 0 || !target) return false;

    const arrSorted = this.quicksort(array);
    const len = arrSorted.length;

    for (let i = 0; i < len; i++) {
      const complement = target - arrSorted[i];

      if (this.binarysearch(arrSorted, complement) !== -1) {
        return true;
      }
    }

    return false;
  };

  /**
   * Solution: 3 Hash set
   * @param array
   * @param target
   * @returns
   */
  hashSetSum = (array: number[], target: number) => {
    const hashset = new Set();

    for (let num of array) {
      const complement = target - num;

      if (hashset.has(complement)) {
        return true;
      }
      hashset.add(num);
    }

    return false;
  };
}
