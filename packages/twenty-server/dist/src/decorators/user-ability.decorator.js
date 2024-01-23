"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAbility = void 0;
const common_1 = require("@nestjs/common");
const extract_request_1 = require("../utils/extract-request");
exports.UserAbility = (0, common_1.createParamDecorator)((_, context) => {
    const request = (0, extract_request_1.getRequest)(context);
    return request.ability;
});
//# sourceMappingURL=user-ability.decorator.js.map