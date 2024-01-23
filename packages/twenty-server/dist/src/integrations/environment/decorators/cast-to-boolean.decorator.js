"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastToBoolean = void 0;
const class_transformer_1 = require("class-transformer");
const CastToBoolean = () => (0, class_transformer_1.Transform)(({ value }) => toBoolean(value));
exports.CastToBoolean = CastToBoolean;
const toBoolean = (value) => {
    if (typeof value === 'boolean') {
        return value;
    }
    if (['true', 'on', 'yes', '1'].includes(value.toLowerCase())) {
        return true;
    }
    if (['false', 'off', 'no', '0'].includes(value.toLowerCase())) {
        return false;
    }
    return undefined;
};
//# sourceMappingURL=cast-to-boolean.decorator.js.map