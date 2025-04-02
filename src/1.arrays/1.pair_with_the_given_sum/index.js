"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var PairWithTheGivenSum = /** @class */ (function () {
    function PairWithTheGivenSum() {
        var _this = this;
        /**
         * Solution: 1 Time complexity: O(n^2)
         * @param array
         * @param target
         * @returns
         */
        this.nestedLoopSum = function (array, target) {
            if (array.length === 0 || !target)
                return false;
            var len = array.length;
            for (var i = 0; i < len; i++) {
                for (var j = i + 1; j < len; j++) {
                    if (array[i] + array[j] === target) {
                        return true;
                    }
                }
            }
            return false;
        };
        this.quicksort = function (array) {
            if (array.length <= 1)
                return array;
            var privot = array[0];
            var left = [], right = [];
            for (var i = 1; i <= array.length - 1; i++) {
                if (array[i] < privot) {
                    left.push(array[i]);
                }
                else {
                    right.push(array[i]);
                }
            }
            return __spreadArray(__spreadArray(__spreadArray([], _this.quicksort(left), true), [privot], false), _this.quicksort(right), true);
        };
        /**
         *
         * @param array must be sorted
         * @param target
         * @returns
         */
        this.binarysearch = function (array, target) {
            var left = 0;
            var right = array.length - 1;
            while (left <= right) {
                var middle = Math.floor((left + right) / 2);
                if (array[middle] === target)
                    return middle;
                if (target > array[middle]) {
                    left = middle + 1;
                }
                else {
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
        this.sortingBinarySearchSum = function (array, target) {
            if (array.length === 0 || !target)
                return false;
            var arrSorted = _this.quicksort(array);
            var len = arrSorted.length;
            for (var i = 0; i < len; i++) {
                var complement = target - arrSorted[i];
                if (_this.binarysearch(arrSorted, complement) !== -1) {
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
        this.hashSetSum = function (array, target) {
            var hashset = new Set();
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var num = array_1[_i];
                var complement = target - num;
                if (hashset.has(complement)) {
                    return true;
                }
                hashset.add(num);
            }
            return false;
        };
    }
    return PairWithTheGivenSum;
}());
exports.default = PairWithTheGivenSum;
//# sourceMappingURL=index.js.map