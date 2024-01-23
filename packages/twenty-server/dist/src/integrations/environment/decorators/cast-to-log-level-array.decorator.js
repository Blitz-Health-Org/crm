"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastToLogLevelArray = void 0;
const class_transformer_1 = require("class-transformer");
const CastToLogLevelArray = () => (0, class_transformer_1.Transform)(({ value }) => toLogLevelArray(value));
exports.CastToLogLevelArray = CastToLogLevelArray;
const toLogLevelArray = (value) => {
    if (typeof value === 'string') {
        const rawLogLevels = value.split(',').map((level) => level.trim());
        const isInvalid = rawLogLevels.some((level) => !['log', 'error', 'warn', 'debug', 'verbose'].includes(level));
        if (!isInvalid) {
            return rawLogLevels;
        }
    }
    return undefined;
};
//# sourceMappingURL=cast-to-log-level-array.decorator.js.map