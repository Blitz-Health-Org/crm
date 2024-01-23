"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeDefaultOptions = void 0;
function mergeDefaultOptions(pOptions) {
    return Object.assign({ getRecords: async (query) => {
            return query.getRawMany();
        }, getCursor: (record) => ({ id: record === null || record === void 0 ? void 0 : record.id }), encodeCursor: (cursor) => Buffer.from(cursor.id.toString()).toString('base64'), decodeCursor: (cursorString) => ({
            id: Buffer.from(cursorString, 'base64').toString(),
        }), recordToEdge: (record) => ({ node: record }), resolveInfo: null }, pOptions);
}
exports.mergeDefaultOptions = mergeDefaultOptions;
//# sourceMappingURL=default-options.js.map