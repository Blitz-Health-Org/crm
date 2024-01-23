"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.anonymize = void 0;
const crypto_1 = __importDefault(require("crypto"));
const anonymize = (input) => {
    return crypto_1.default.createHash('md5').update(input).digest('hex');
};
exports.anonymize = anonymize;
//# sourceMappingURL=anonymize.js.map