"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductOfArrayExpectSelf = /** @class */ (function () {
    function ProductOfArrayExpectSelf() {
        this.nestedLoop = function (array) {
            if (array.length <= 1)
                return [];
            var result = new Array(array.length).fill(1);
            for (var i = 0; i < array.length; i++) {
                for (var j = 0; j < array.length; j++) {
                    if (i !== j) {
                        result[i] = result[i] * array[j];
                    }
                }
            }
            return result;
        };
        this.prefixSubffix = function (array) {
            var prefix = new Array(array.length).fill(1);
            var subffix = new Array(array.length).fill(1);
            var result = new Array(array.length).fill(1);
            for (var i = 1; i < array.length; i++) {
                prefix[i] = array[i - 1] * prefix[i - 1];
            }
            for (var i = array.length - 2; i >= 0; i--) {
                subffix[i] = array[i + 1] * subffix[i + 1];
            }
            for (var i = 0; i < array.length; i++) {
                result[i] = prefix[i] * subffix[i];
            }
            return result;
        };
    }
    return ProductOfArrayExpectSelf;
}());
exports.default = ProductOfArrayExpectSelf;
//# sourceMappingURL=index.js.map