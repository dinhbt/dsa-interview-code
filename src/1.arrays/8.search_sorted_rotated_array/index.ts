export default class SearchSortedRotatedArray {
  linearSearch(array: number[], search: number) {
    if (array.length === 0) return -1;

    for (let i = 0; i < array.length; i++) {
      if (array[i] === search) {
        return i;
      }
    }

    return -1;
  }

  /**
   *Input: arr[] = [3, 5, 1, 2], key = 6
    Output: -1
    Explanation: 6 is not present in arr[].
   * @param array
   * @param search
   * @returns
   */

  binarySearch(array: number[], search: number) {
    let low = 0,
      high = array.length - 1;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (array[mid] === search) {
        return mid;
      }

      if (array[low] <= array[mid]) {
        if (search >= array[low] && search < array[mid]) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else {
        if (array[mid] < search && search <= array[high]) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
    }

    return -1;
  }
}
