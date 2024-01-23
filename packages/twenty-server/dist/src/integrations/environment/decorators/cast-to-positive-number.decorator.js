"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastToPositiveNumber = void 0;
const class_transformer_1 = require("class-transformer");
const CastToPositiveNumber = () => (0, class_transformer_1.Transform)(({ value }) => toNumber(value));
exports.CastToPositiveNumber = CastToPositiveNumber;
const toNumber = (value) => {
    if (typeof value === 'number') {
        return value >= 0 ? value : undefined;
    }
    if (typeof value === 'string') {
        return isNaN(+value) ? undefined : toNumber(+value);
    }
    return undefined;
};
//# sourceMappingURL=cast-to-positive-number.decorator.js.map