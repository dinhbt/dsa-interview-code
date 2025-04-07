"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ContainerWithMostWater = /** @class */ (function () {
    function ContainerWithMostWater() {
        /**
         *  5      |
         *  4      |    |
         *  3      |    |    |
         *  1   |  |    |    |
         *
         *
         * i = 0
         * j = 1
         * Min (1, 5) = 1
         * Distance = 1 - 0 = 1
         * Max (1, (Min * Distance))
         *    * @param array
         */
        this.nestedLoop = function (array) {
            var max = array[0];
            for (var i = 0; i < array.length; i++) {
                for (var j = 1; j < array.length; j++) {
                    var min = Math.min(array[i], array[j]) * (j - i);
                    max = Math.max(max, min);
                }
            }
            return max;
        };
        /**
         *     5      |
         *     4      |    |
         *     3      |    |    |
         *     1   |  |    |    |
         *
         *  [1, 3, 4, 5]
         *
         *  left=0 right=3
         * @param array
         */
        this.twoPointer = function (array) {
            var left = 0, right = array.length - 1, max = 0;
            while (left < right) {
                var cal = Math.min(array[left], array[right]) * (right - left);
                max = Math.max(max, cal);
                if (array[left] < array[right]) {
                    left = left + 1;
                }
                else {
                    right = right - 1;
                }
            }
            return max;
        };
    }
    return ContainerWithMostWater;
}());
exports.default = ContainerWithMostWater;
//# sourceMappingURL=index.js.map