"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MiniumRotateArray = /** @class */ (function () {
    function MiniumRotateArray() {
        this.linearSearch = function (array) {
            if (array.length === 0)
                return 0;
            var min = array[0];
            for (var i = 1; i < array.length; i++) {
                min = Math.min(min, array[i]);
            }
            return min;
        };
        /**
         * @param array
         * @returns
         */
        this.binarySearch = function (array) {
            if (array.length === 0)
                return 0;
            var right = array.length - 1, left = 0;
            while (left < right) {
                var mid = Math.floor((right - left) / 2);
                if (array[left] < array[right])
                    return array[left];
                if (array[left] < array[mid]) {
                    if (array[left] < array[right]) {
                        right = mid - 1;
                    }
                    else {
                        left = mid;
                    }
                }
                else {
                    if (array[left] > array[right]) {
                        left = mid;
                    }
                    else {
                        right = mid;
                    }
                }
            }
        };
    }
    return MiniumRotateArray;
}());
exports.default = MiniumRotateArray;
//# sourceMappingURL=index.js.map