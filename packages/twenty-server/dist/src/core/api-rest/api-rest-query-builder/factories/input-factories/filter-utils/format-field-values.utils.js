"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFieldValue = void 0;
const common_1 = require("@nestjs/common");
const field_metadata_entity_1 = require("../../../../../../metadata/field-metadata/field-metadata.entity");
const formatFieldValue = (value, fieldType, comparator) => {
    if (comparator === 'in') {
        if (value[0] !== '[' || value[value.length - 1] !== ']') {
            throw new common_1.BadRequestException(`'filter' invalid for 'in' operator. Received '${value}' but array value expected eg: 'field[in]:[value_1,value_2]'`);
        }
        const stringValues = value.substring(1, value.length - 1);
        return stringValues
            .split(',')
            .map((value) => (0, exports.formatFieldValue)(value, fieldType));
    }
    if (comparator === 'is') {
        return value;
    }
    if (fieldType === field_metadata_entity_1.FieldMetadataType.NUMBER) {
        return parseInt(value);
    }
    if (fieldType === field_metadata_entity_1.FieldMetadataType.BOOLEAN) {
        return value.toLowerCase() === 'true';
    }
    if ((value[0] === '"' || value[0] === "'") &&
        (value.charAt(value.length - 1) === '"' ||
            value.charAt(value.length - 1) === "'")) {
        return value.substring(1, value.length - 1);
    }
    return value;
};
exports.formatFieldValue = formatFieldValue;
//# sourceMappingURL=format-field-values.utils.js.map