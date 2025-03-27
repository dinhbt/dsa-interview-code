"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MaxiumProductSubArray = /** @class */ (function () {
    function MaxiumProductSubArray() {
        var _this = this;
        this.nestedLoops = function (array) {
            if (array.length <= 1)
                return 0;
            var max = array[0];
            for (var i = 1; i < array.length; i++) {
                var temp = 1;
                for (var j = i; j < array.length; j++) {
                    temp = temp * array[j];
                    if (temp > max) {
                        max = temp;
                    }
                }
            }
            return max;
        };
        this.maxCompare = function (a, b, c) {
            return a > b ? (a > c ? a : c) : b > c ? b : c;
        };
        this.minCompare = function (a, b, c) {
            return a < b ? (a < c ? a : c) : b < c ? b : c;
        };
        this.minMax = function (array) {
            var currMin = array[0];
            var currMax = array[0];
            var max = array[0];
            for (var i = 1; i < array.length; i++) {
                var temp = _this.maxCompare(array[i] * currMax, array[i] * currMin, array[i]);
                currMin = _this.minCompare(array[i] * currMax, array[i] * currMin, array[i]);
                currMax = temp;
                max = _this.maxCompare(max, max, currMax);
            }
            return max;
        };
        this.traversing = function (array) {
            var leftToRight = 1, rightToLeft = 1, max = 1;
            var len = array.length;
            for (var i = 0; i < len; i++) {
                if (leftToRight === 0) {
                    leftToRight = 1;
                }
                if (rightToLeft === 0) {
                    rightToLeft = 1;
                }
                var j = len - 1 - i;
                leftToRight = leftToRight * array[i];
                rightToLeft = rightToLeft * array[j];
                max = Math.max(leftToRight, rightToLeft, max);
            }
            return max;
        };
    }
    return MaxiumProductSubArray;
}());
exports.default = MaxiumProductSubArray;
//# sourceMappingURL=index.js.map