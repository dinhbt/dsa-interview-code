"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SearchSortedRotatedArray = /** @class */ (function () {
    function SearchSortedRotatedArray() {
    }
    SearchSortedRotatedArray.prototype.linearSearch = function (array, search) {
        if (array.length === 0)
            return -1;
        for (var i = 0; i < array.length; i++) {
            if (array[i] === search) {
                return i;
            }
        }
        return -1;
    };
    /**
     *Input: arr[] = [3, 5, 1, 2], key = 6
      Output: -1
      Explanation: 6 is not present in arr[].
     * @param array
     * @param search
     * @returns
     */
    SearchSortedRotatedArray.prototype.binarySearch = function (array, search) {
        var low = 0, high = array.length - 1;
        while (low <= high) {
            var mid = low + Math.floor((high - low) / 2);
            if (array[mid] === search) {
                return mid;
            }
            if (array[low] <= array[mid]) {
                if (search >= array[low] && search < array[mid]) {
                    high = mid - 1;
                }
                else {
                    low = mid + 1;
                }
            }
            else {
                if (array[mid] < search && search <= array[high]) {
                    low = mid + 1;
                }
                else {
                    high = mid - 1;
                }
            }
        }
        return -1;
    };
    return SearchSortedRotatedArray;
}());
exports.default = SearchSortedRotatedArray;
//# sourceMappingURL=index.js.map