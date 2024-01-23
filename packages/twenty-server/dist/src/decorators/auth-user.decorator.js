"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUser = void 0;
const common_1 = require("@nestjs/common");
const extract_request_1 = require("../utils/extract-request");
exports.AuthUser = (0, common_1.createParamDecorator)((options, ctx) => {
    const request = (0, extract_request_1.getRequest)(ctx);
    if (!(options === null || options === void 0 ? void 0 : options.allowUndefined) && (!request.user || !request.user.user)) {
        throw new common_1.ForbiddenException("You're not authorized to do this");
    }
    return request.user ? request.user.user : undefined;
});
//# sourceMappingURL=auth-user.decorator.js.map