"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDefaultConjunctionIfMissing = exports.DEFAULT_CONJUNCTION = void 0;
const parse_filter_utils_1 = require("./parse-filter.utils");
exports.DEFAULT_CONJUNCTION = parse_filter_utils_1.Conjunctions.and;
const addDefaultConjunctionIfMissing = (filterQuery) => {
    if (!(filterQuery.includes('(') && filterQuery.includes(')'))) {
        return `${exports.DEFAULT_CONJUNCTION}(${filterQuery})`;
    }
    return filterQuery;
};
exports.addDefaultConjunctionIfMissing = addDefaultConjunctionIfMissing;
//# sourceMappingURL=add-default-conjunction.utils.js.map