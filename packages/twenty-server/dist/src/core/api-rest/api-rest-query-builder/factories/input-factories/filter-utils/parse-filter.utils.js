"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFilter = exports.Conjunctions = void 0;
const common_1 = require("@nestjs/common");
const parse_filter_content_utils_1 = require("./parse-filter-content.utils");
const parse_base_filter_utils_1 = require("./parse-base-filter.utils");
const fields_utils_1 = require("../../../utils/fields.utils");
const format_field_values_utils_1 = require("./format-field-values.utils");
var Conjunctions;
(function (Conjunctions) {
    Conjunctions["or"] = "or";
    Conjunctions["and"] = "and";
    Conjunctions["not"] = "not";
})(Conjunctions || (exports.Conjunctions = Conjunctions = {}));
const parseFilter = (filterQuery, objectMetadataItem) => {
    const result = {};
    const match = filterQuery.match(`^(${Object.values(Conjunctions).join('|')})((.+))$`);
    if (match) {
        const conjunction = match === null || match === void 0 ? void 0 : match[1];
        if (!conjunction) {
            throw new common_1.BadRequestException('Error while matching filter query. Conjunction not found');
        }
        const subResult = (0, parse_filter_content_utils_1.parseFilterContent)(filterQuery).map((elem) => (0, exports.parseFilter)(elem, objectMetadataItem));
        if (conjunction === Conjunctions.not) {
            if (subResult.length > 1) {
                throw new common_1.BadRequestException(`'filter' invalid. 'not' conjunction should contain only 1 condition. eg: not(field[eq]:1)`);
            }
            result[conjunction] = subResult[0];
        }
        else {
            result[conjunction] = subResult;
        }
        return result;
    }
    const { fields, comparator, value } = (0, parse_base_filter_utils_1.parseBaseFilter)(filterQuery);
    (0, fields_utils_1.checkFields)(objectMetadataItem, fields);
    const fieldType = (0, fields_utils_1.getFieldType)(objectMetadataItem, fields[0]);
    const formattedValue = (0, format_field_values_utils_1.formatFieldValue)(value, fieldType, comparator);
    return fields.reverse().reduce((acc, currentValue) => {
        return { [currentValue]: acc };
    }, { [comparator]: formattedValue });
};
exports.parseFilter = parseFilter;
//# sourceMappingURL=parse-filter.utils.js.map