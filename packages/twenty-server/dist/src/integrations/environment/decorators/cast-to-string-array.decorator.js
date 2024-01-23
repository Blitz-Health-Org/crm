"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastToStringArray = void 0;
const class_transformer_1 = require("class-transformer");
const CastToStringArray = () => (0, class_transformer_1.Transform)(({ value }) => toStringArray(value));
exports.CastToStringArray = CastToStringArray;
const toStringArray = (value) => {
    if (typeof value === 'string') {
        return value.split(',').map((item) => item.trim());
    }
    return undefined;
};
//# sourceMappingURL=cast-to-string-array.decorator.js.map