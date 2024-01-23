"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fieldMetadataTypeToColumnType = void 0;
const field_metadata_entity_1 = require("../../field-metadata/field-metadata.entity");
const fieldMetadataTypeToColumnType = (fieldMetadataType) => {
    switch (fieldMetadataType) {
        case field_metadata_entity_1.FieldMetadataType.UUID:
            return 'uuid';
        case field_metadata_entity_1.FieldMetadataType.TEXT:
            return 'text';
        case field_metadata_entity_1.FieldMetadataType.PHONE:
        case field_metadata_entity_1.FieldMetadataType.EMAIL:
            return 'varchar';
        case field_metadata_entity_1.FieldMetadataType.NUMERIC:
            return 'numeric';
        case field_metadata_entity_1.FieldMetadataType.NUMBER:
        case field_metadata_entity_1.FieldMetadataType.PROBABILITY:
            return 'float';
        case field_metadata_entity_1.FieldMetadataType.BOOLEAN:
            return 'boolean';
        case field_metadata_entity_1.FieldMetadataType.DATE_TIME:
            return 'timestamp';
        case field_metadata_entity_1.FieldMetadataType.RATING:
        case field_metadata_entity_1.FieldMetadataType.SELECT:
        case field_metadata_entity_1.FieldMetadataType.MULTI_SELECT:
            return 'enum';
        default:
            throw new Error(`Cannot convert ${fieldMetadataType} to column type.`);
    }
};
exports.fieldMetadataTypeToColumnType = fieldMetadataTypeToColumnType;
//# sourceMappingURL=field-metadata-type-to-column-type.util.js.map