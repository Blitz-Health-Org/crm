"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthWorkspace = void 0;
const common_1 = require("@nestjs/common");
const extract_request_1 = require("../utils/extract-request");
exports.AuthWorkspace = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = (0, extract_request_1.getRequest)(ctx);
    return request.user ? request.user.workspace : undefined;
});
//# sourceMappingURL=auth-workspace.decorator.js.map