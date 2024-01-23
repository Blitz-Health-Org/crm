"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBaseFilter = exports.FilterComparators = void 0;
const common_1 = require("@nestjs/common");
var FilterComparators;
(function (FilterComparators) {
    FilterComparators["eq"] = "eq";
    FilterComparators["neq"] = "neq";
    FilterComparators["in"] = "in";
    FilterComparators["is"] = "is";
    FilterComparators["gt"] = "gt";
    FilterComparators["gte"] = "gte";
    FilterComparators["lt"] = "lt";
    FilterComparators["lte"] = "lte";
    FilterComparators["startsWith"] = "startsWith";
    FilterComparators["like"] = "like";
    FilterComparators["ilike"] = "ilike";
})(FilterComparators || (exports.FilterComparators = FilterComparators = {}));
const parseBaseFilter = (baseFilter) => {
    if (!baseFilter.match(`^(.+)\\[(.+)\\]:(.+)$`)) {
        throw new common_1.BadRequestException(`'filter' invalid for '${baseFilter}'. eg: price[gte]:10`);
    }
    let fields = '';
    let comparator = '';
    let value = '';
    let fillFields = true;
    let fillComparator = false;
    let fillValue = false;
    for (const c of baseFilter) {
        if (fillValue)
            value += c;
        if (c === ']' && !fillValue)
            fillComparator = false;
        if (c === ':' && !fillComparator)
            fillValue = true;
        if (fillComparator)
            comparator += c;
        if (c === '[' && fillFields) {
            fillFields = false;
            fillComparator = true;
        }
        if (fillFields)
            fields += c;
    }
    if (!Object.keys(FilterComparators).includes(comparator)) {
        throw new common_1.BadRequestException(`'filter' invalid for '${baseFilter}', comparator ${comparator} not in ${Object.keys(FilterComparators).join(',')}`);
    }
    return { fields: fields.split('.'), comparator, value };
};
exports.parseBaseFilter = parseBaseFilter;
//# sourceMappingURL=parse-base-filter.utils.js.map