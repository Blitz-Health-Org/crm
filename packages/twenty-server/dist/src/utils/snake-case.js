"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.snakeCaseDeep = exports.snakeCase = void 0;
const lodash_isobject_1 = __importDefault(require("lodash.isobject"));
const lodash_snakecase_1 = __importDefault(require("lodash.snakecase"));
const snakeCase = (text) => (0, lodash_snakecase_1.default)(text);
exports.snakeCase = snakeCase;
const snakeCaseDeep = (value) => {
    if (Array.isArray(value)) {
        return value.map(exports.snakeCaseDeep);
    }
    if ((0, lodash_isobject_1.default)(value)) {
        const result = {};
        for (const key in value) {
            result[(0, exports.snakeCase)(key)] = (0, exports.snakeCaseDeep)(value[key]);
        }
        return result;
    }
    return value;
};
exports.snakeCaseDeep = snakeCaseDeep;
//# sourceMappingURL=snake-case.js.map