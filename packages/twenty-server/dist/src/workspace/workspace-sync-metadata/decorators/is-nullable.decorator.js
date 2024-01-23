"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsNullable = void 0;
const typed_reflect_1 = require("../../../utils/typed-reflect");
function IsNullable() {
    return function (target, fieldKey) {
        typed_reflect_1.TypedReflect.defineMetadata('isNullable', true, target, fieldKey);
    };
}
exports.IsNullable = IsNullable;
//# sourceMappingURL=is-nullable.decorator.js.map