"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeDepth = void 0;
const common_1 = require("@nestjs/common");
const ALLOWED_DEPTH_VALUES = [1, 2];
const computeDepth = (request) => {
    if (!request.query.depth) {
        return undefined;
    }
    const depth = +request.query.depth;
    if (isNaN(depth) || !ALLOWED_DEPTH_VALUES.includes(depth)) {
        throw new common_1.BadRequestException(`'depth=${request.query.depth}' parameter invalid. Allowed values are ${ALLOWED_DEPTH_VALUES.join(', ')}`);
    }
    return depth;
};
exports.computeDepth = computeDepth;
//# sourceMappingURL=compute-depth.utils.js.map