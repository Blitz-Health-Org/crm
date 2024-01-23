"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBackwardPagination = exports.isForwardPagination = void 0;
function isForwardPagination(args) {
    return 'first' in args && args.first != null;
}
exports.isForwardPagination = isForwardPagination;
function isBackwardPagination(args) {
    return 'last' in args && args.last != null;
}
exports.isBackwardPagination = isBackwardPagination;
//# sourceMappingURL=pagination-direction.js.map