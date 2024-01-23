"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertNotNull = exports.assert = void 0;
const assert = (condition, message, ErrorType) => {
    if (!condition) {
        if (ErrorType) {
            if (message) {
                throw new ErrorType(message);
            }
            throw new ErrorType();
        }
        throw new Error(message);
    }
};
exports.assert = assert;
const assertNotNull = (item) => item !== null && item !== undefined;
exports.assertNotNull = assertNotNull;
//# sourceMappingURL=assert.js.map