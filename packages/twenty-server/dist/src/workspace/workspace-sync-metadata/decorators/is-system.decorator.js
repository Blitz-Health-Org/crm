"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsSystem = void 0;
const typed_reflect_1 = require("../../../utils/typed-reflect");
function IsSystem() {
    return function (target, fieldKey) {
        if (fieldKey) {
            typed_reflect_1.TypedReflect.defineMetadata('isSystem', true, target, fieldKey);
        }
        else {
            typed_reflect_1.TypedReflect.defineMetadata('isSystem', true, target);
        }
    };
}
exports.IsSystem = IsSystem;
//# sourceMappingURL=is-system.decorator.js.map