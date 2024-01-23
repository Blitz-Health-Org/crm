"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkFields = exports.getFieldType = void 0;
const common_1 = require("@nestjs/common");
const compute_object_target_table_util_1 = require("../../../../workspace/utils/compute-object-target-table.util");
const getFieldType = (objectMetadataItem, fieldName) => {
    for (const itemField of objectMetadataItem.fields) {
        if (fieldName === itemField.name) {
            return itemField.type;
        }
    }
};
exports.getFieldType = getFieldType;
const checkFields = (objectMetadataItem, fieldNames) => {
    for (const fieldName of fieldNames) {
        if (!objectMetadataItem.fields
            .reduce((acc, itemField) => [
            ...acc,
            itemField.name,
            ...Object.keys(itemField.targetColumnMap),
        ], [])
            .includes(fieldName)) {
            throw new common_1.BadRequestException(`field '${fieldName}' does not exist in '${(0, compute_object_target_table_util_1.computeObjectTargetTable)(objectMetadataItem)}' object`);
        }
    }
};
exports.checkFields = checkFields;
//# sourceMappingURL=fields.utils.js.map