"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MaxiumSubArraySum = /** @class */ (function () {
    function MaxiumSubArraySum() {
        /**
         *
         * @param array Input: arr[] = {2, 3, -8, 7, -1, 2, 3}
         * Output: 11
         * Explanation: The subarray {7, -1, 2, 3} has the largest sum 11.
         * /**
         * i = 0 => result = 0; subtemp = 0;
         * 	j = 1 subtemp = 5; result = 5
         * 	j = 2 subtemp = -3; result = 5
         * 	j = 3 subtemp = 4; result = 5
         * 	j = 4 subtemp = 3; result = 5
         * 	j = 5 subtemp = 6; result = 6
         * 	j = 6 subtemp = 9; result = 9
         *
         * i = 1 => result = 9; subtemp = 0;
         * 	j = 2 subtemp = -5; result = 9
         * 	j = 3 subtemp = 2; result = 9
         * 	j = 4 subtemp = 1; result = 9
         * 	j = 5 subtemp = 3; result = 9
         * 	j = 6 subtemp = 6; result = 9
         *
         * i = 2 => result = 9; subtemp = 0;
         * 	j = 3 subtemp = -1; result = 9
         * 	j = 4 subtemp = -2; result = 9
         * 	j = 5 subtemp = 0; result = 9
         * 	j = 6 subtemp = 3; result = 9
         *
         * i = 3 => result = 9; subtemp = 0;
         * 	j = 4 subtemp = 6; result = 9
         * 	j = 5 subtemp = 8; result = 9
         * 	j = 6 subtemp = 11; result = 11
         *
         * i = 4 => result = 11; subtemp = 0;
         * 	j = 5 subtemp = 1; result = 11
         * 	j = 6 subtemp = 11; result = 11
         *
         * i = 5 => result = 11; subtemp = 0;
         * 	j = 6 subtemp = 5; result = 11
         * 6 => result = 11; subtemp = 0;
         * 	j = 3 subtemp = 3; result = 11
         */
        this.nestedLoop = function (array) {
            var result = array[0];
            for (var i = 0; i < array.length; i++) {
                var sumtemp = 0;
                for (var j = i; j < array.length; j++) {
                    sumtemp = sumtemp + array[j];
                    result = Math.max(result, sumtemp);
                }
            }
            return result;
        };
        /**
         *
         * @param array arr[] = {2, 3, -8, 7, -1, 2, 3}
         * @returns
         */
        this.kadanesAlgorithm = function (array) {
            var result = 0;
            var maxSumAt = 0;
            for (var i = 0; i < array.length; i++) {
                maxSumAt = Math.max(array[i], array[i] + maxSumAt);
                result = Math.max(result, maxSumAt);
            }
            return result;
        };
    }
    return MaxiumSubArraySum;
}());
exports.default = MaxiumSubArraySum;
//# sourceMappingURL=index.js.map