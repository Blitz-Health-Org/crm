"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractCursorKeyValue = exports.encodeCursor = exports.decodeCursor = void 0;
function decodeCursor(connectionCursor, options) {
    if (!connectionCursor) {
        return undefined;
    }
    return options.decodeCursor(connectionCursor);
}
exports.decodeCursor = decodeCursor;
function encodeCursor(record, options) {
    return options.encodeCursor(options.getCursor(record));
}
exports.encodeCursor = encodeCursor;
function extractCursorKeyValue(connectionCursor, options) {
    const cursor = decodeCursor(connectionCursor, options);
    if (!cursor) {
        return undefined;
    }
    return [Object.keys(cursor), Object.values(cursor)];
}
exports.extractCursorKeyValue = extractCursorKeyValue;
//# sourceMappingURL=cursor.js.map