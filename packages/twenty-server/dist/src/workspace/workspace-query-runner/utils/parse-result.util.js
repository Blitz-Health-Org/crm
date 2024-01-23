"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseResult = exports.handleSpecialKey = exports.isSpecialKey = void 0;
const isSpecialKey = (key) => {
    return key.startsWith('___');
};
exports.isSpecialKey = isSpecialKey;
const handleSpecialKey = (result, key, value) => {
    const parts = key.split('_').filter((part) => part);
    if (parts.length < 2) {
        return;
    }
    const newKey = parts.slice(0, -1).join('');
    const subKey = parts[parts.length - 1];
    if (!result[newKey]) {
        result[newKey] = {};
    }
    result[newKey][subKey] = value;
};
exports.handleSpecialKey = handleSpecialKey;
const parseResult = (obj) => {
    if (obj === null || typeof obj !== 'object' || typeof obj === 'function') {
        return obj;
    }
    if (Array.isArray(obj)) {
        return obj.map((item) => (0, exports.parseResult)(item));
    }
    const result = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                result[key] = (0, exports.parseResult)(obj[key]);
            }
            else if (key === '__typename') {
                result[key] = obj[key].replace(/^_*/, '');
            }
            else if ((0, exports.isSpecialKey)(key)) {
                (0, exports.handleSpecialKey)(result, key, obj[key]);
            }
            else {
                result[key] = obj[key];
            }
        }
    }
    return result;
};
exports.parseResult = parseResult;
//# sourceMappingURL=parse-result.util.js.map