"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateArgs = void 0;
function validateArgs(args) {
    if (args.first != null && args.last != null) {
        throw new Error('Only one of "first" and "last" can be set');
    }
    if (args.after != null && args.before != null) {
        throw new Error('Only one of "after" and "before" can be set');
    }
    if (args.after != null && args.first == null) {
        throw new Error('"after" needs to be used with "first"');
    }
    if (args.before != null && args.last == null) {
        throw new Error('"before" needs to be used with "last"');
    }
    if (args.first != null && args.first <= 0) {
        throw new Error('"first" has to be positive');
    }
    if (args.last != null && args.last <= 0) {
        throw new Error('"last" has to be positive');
    }
    return true;
}
exports.validateArgs = validateArgs;
//# sourceMappingURL=validate-args.js.map