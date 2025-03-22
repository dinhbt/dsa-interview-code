"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FindNumberDuplicate = /** @class */ (function () {
    function FindNumberDuplicate() {
        this.hashSet = function (array) {
            var _a;
            var map = new Map();
            var result = [];
            for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
                var num = array_1[_i];
                var current = (_a = map.get(num)) !== null && _a !== void 0 ? _a : 0;
                map.set(num, current + 1);
            }
            map.forEach(function (value, key) {
                if (value > 1) {
                    result.push(key);
                }
            });
            console.log(result);
            return result;
        };
    }
    return FindNumberDuplicate;
}());
exports.default = FindNumberDuplicate;
//# sourceMappingURL=index.js.map