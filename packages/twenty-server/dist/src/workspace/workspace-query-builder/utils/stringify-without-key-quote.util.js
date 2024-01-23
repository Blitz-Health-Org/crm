"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyWithoutKeyQuote = void 0;
const stringifyWithoutKeyQuote = (obj) => {
    const jsonString = JSON.stringify(obj);
    const jsonWithoutQuotes = jsonString === null || jsonString === void 0 ? void 0 : jsonString.replace(/"(\w+)"\s*:/g, '$1:');
    return jsonWithoutQuotes;
};
exports.stringifyWithoutKeyQuote = stringifyWithoutKeyQuote;
//# sourceMappingURL=stringify-without-key-quote.util.js.map