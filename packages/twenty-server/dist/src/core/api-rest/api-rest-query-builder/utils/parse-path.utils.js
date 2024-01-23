"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePath = void 0;
const common_1 = require("@nestjs/common");
const parsePath = (request) => {
    const queryAction = request.path.replace('/rest/', '').split('/');
    if (queryAction.length > 2) {
        throw new common_1.BadRequestException(`Query path '${request.path}' invalid. Valid examples: /rest/companies/id or /rest/companies`);
    }
    if (queryAction.length === 1) {
        return { object: queryAction[0] };
    }
    return { object: queryAction[0], id: queryAction[1] };
};
exports.parsePath = parsePath;
//# sourceMappingURL=parse-path.utils.js.map