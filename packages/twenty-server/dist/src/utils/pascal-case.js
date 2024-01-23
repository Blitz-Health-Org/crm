"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pascalCaseDeep = exports.pascalCase = void 0;
const lodash_isobject_1 = __importDefault(require("lodash.isobject"));
const lodash_camelcase_1 = __importDefault(require("lodash.camelcase"));
const lodash_upperfirst_1 = __importDefault(require("lodash.upperfirst"));
const pascalCase = (text) => (0, lodash_upperfirst_1.default)((0, lodash_camelcase_1.default)(text));
exports.pascalCase = pascalCase;
const pascalCaseDeep = (value) => {
    if (Array.isArray(value)) {
        return value.map(exports.pascalCaseDeep);
    }
    if ((0, lodash_isobject_1.default)(value)) {
        const result = {};
        for (const key in value) {
            result[(0, exports.pascalCase)(key)] = (0, exports.pascalCaseDeep)(value[key]);
        }
        return result;
    }
    return value;
};
exports.pascalCaseDeep = pascalCaseDeep;
//# sourceMappingURL=pascal-case.js.map