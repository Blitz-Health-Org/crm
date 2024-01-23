"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gate = void 0;
const typed_reflect_1 = require("../../../utils/typed-reflect");
function Gate(metadata) {
    return function (target, fieldKey) {
        if (fieldKey) {
            typed_reflect_1.TypedReflect.defineMetadata('gate', metadata, target, fieldKey);
        }
        else {
            typed_reflect_1.TypedReflect.defineMetadata('gate', metadata, target);
        }
    };
}
exports.Gate = Gate;
//# sourceMappingURL=gate.decorator.js.map