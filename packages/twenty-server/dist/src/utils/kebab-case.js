"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.kebabCaseDeep = exports.kebabCase = void 0;
const lodash_isobject_1 = __importDefault(require("lodash.isobject"));
const lodash_kebabcase_1 = __importDefault(require("lodash.kebabcase"));
const kebabCase = (text) => (0, lodash_kebabcase_1.default)(text);
exports.kebabCase = kebabCase;
const kebabCaseDeep = (value) => {
    if (Array.isArray(value)) {
        return value.map(exports.kebabCaseDeep);
    }
    if ((0, lodash_isobject_1.default)(value)) {
        const result = {};
        for (const key in value) {
            result[(0, exports.kebabCase)(key)] = (0, exports.kebabCaseDeep)(value[key]);
        }
        return result;
    }
    return value;
};
exports.kebabCaseDeep = kebabCaseDeep;
//# sourceMappingURL=kebab-case.js.map