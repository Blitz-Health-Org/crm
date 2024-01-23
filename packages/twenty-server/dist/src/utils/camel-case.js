"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelCaseDeep = exports.camelCase = void 0;
const lodash_isobject_1 = __importDefault(require("lodash.isobject"));
const lodash_camelcase_1 = __importDefault(require("lodash.camelcase"));
const camelCase = (text) => (0, lodash_camelcase_1.default)(text);
exports.camelCase = camelCase;
const camelCaseDeep = (value) => {
    if (Array.isArray(value)) {
        return value.map(exports.camelCaseDeep);
    }
    if ((0, lodash_isobject_1.default)(value)) {
        const result = {};
        for (const key in value) {
            result[(0, exports.camelCase)(key)] = (0, exports.camelCaseDeep)(value[key]);
        }
        return result;
    }
    return value;
};
exports.camelCaseDeep = camelCaseDeep;
//# sourceMappingURL=camel-case.js.map