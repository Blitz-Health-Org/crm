"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFilterQuery = void 0;
const common_1 = require("@nestjs/common");
const checkFilterQuery = (filterQuery) => {
    const countOpenedBrackets = (filterQuery.match(/\(/g) || []).length;
    const countClosedBrackets = (filterQuery.match(/\)/g) || []).length;
    const diff = countOpenedBrackets - countClosedBrackets;
    if (diff !== 0) {
        const hint = diff > 0
            ? `${diff} close bracket${diff > 1 ? 's are' : ' is'}`
            : `${Math.abs(diff)} open bracket${Math.abs(diff) > 1 ? 's are' : ' is'}`;
        throw new common_1.BadRequestException(`'filter' invalid. ${hint} missing in the query`);
    }
    return;
};
exports.checkFilterQuery = checkFilterQuery;
//# sourceMappingURL=check-filter-query.utils.js.map