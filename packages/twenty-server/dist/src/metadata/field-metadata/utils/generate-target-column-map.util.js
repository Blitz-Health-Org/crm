"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateTargetColumnMap = void 0;
const common_1 = require("@nestjs/common");
const field_metadata_entity_1 = require("../field-metadata.entity");
const create_custom_column_name_util_1 = require("../../utils/create-custom-column-name.util");
function generateTargetColumnMap(type, isCustomField, fieldName) {
    const columnName = isCustomField
        ? (0, create_custom_column_name_util_1.createCustomColumnName)(fieldName)
        : fieldName;
    switch (type) {
        case field_metadata_entity_1.FieldMetadataType.UUID:
        case field_metadata_entity_1.FieldMetadataType.TEXT:
        case field_metadata_entity_1.FieldMetadataType.PHONE:
        case field_metadata_entity_1.FieldMetadataType.EMAIL:
        case field_metadata_entity_1.FieldMetadataType.NUMBER:
        case field_metadata_entity_1.FieldMetadataType.NUMERIC:
        case field_metadata_entity_1.FieldMetadataType.PROBABILITY:
        case field_metadata_entity_1.FieldMetadataType.BOOLEAN:
        case field_metadata_entity_1.FieldMetadataType.DATE_TIME:
        case field_metadata_entity_1.FieldMetadataType.RATING:
        case field_metadata_entity_1.FieldMetadataType.SELECT:
        case field_metadata_entity_1.FieldMetadataType.MULTI_SELECT:
            return {
                value: columnName,
            };
        case field_metadata_entity_1.FieldMetadataType.LINK:
            return {
                label: `${columnName}Label`,
                url: `${columnName}Url`,
            };
        case field_metadata_entity_1.FieldMetadataType.CURRENCY:
            return {
                amountMicros: `${columnName}AmountMicros`,
                currencyCode: `${columnName}CurrencyCode`,
            };
        case field_metadata_entity_1.FieldMetadataType.FULL_NAME:
            return {
                firstName: `${columnName}FirstName`,
                lastName: `${columnName}LastName`,
            };
        case field_metadata_entity_1.FieldMetadataType.RELATION:
            return {};
        default:
            throw new common_1.BadRequestException(`Unknown type ${type}`);
    }
}
exports.generateTargetColumnMap = generateTargetColumnMap;
//# sourceMappingURL=generate-target-column-map.util.js.map