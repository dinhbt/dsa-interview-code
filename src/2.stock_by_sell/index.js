"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StockBuySell = /** @class */ (function () {
    function StockBuySell() {
        this.nestedLoop = function (array) {
            var maxProfit = 0;
            for (var i = 0; i < array.length; i++) {
                for (var j = i + 1; j < array.length; j++) {
                    var profit = array[j] - array[i];
                    maxProfit = Math.max(maxProfit, profit);
                }
            }
            return maxProfit;
        };
        this.traversal = function (array) {
            var min = array[0], maxProfit = 0;
            for (var i = 1; i < array.length; i++) {
                min = Math.min(min, array[i]);
                maxProfit = Math.max(maxProfit, array[i] - min);
            }
            return maxProfit;
        };
    }
    return StockBuySell;
}());
exports.default = StockBuySell;
//# sourceMappingURL=index.js.map