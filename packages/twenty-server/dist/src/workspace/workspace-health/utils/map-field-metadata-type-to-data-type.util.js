"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapFieldMetadataTypeToDataType = void 0;
const common_1 = require("@nestjs/common");
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const mapFieldMetadataTypeToDataType = (fieldMetadataType) => {
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
            return 'double precision';
        case field_metadata_entity_1.FieldMetadataType.BOOLEAN:
            return 'boolean';
        case field_metadata_entity_1.FieldMetadataType.DATE_TIME:
            return 'timestamp';
        case field_metadata_entity_1.FieldMetadataType.RATING:
        case field_metadata_entity_1.FieldMetadataType.SELECT:
        case field_metadata_entity_1.FieldMetadataType.MULTI_SELECT:
            return 'enum';
        default:
            throw new common_1.ConflictException(`Cannot convert ${fieldMetadataType} to data type.`);
    }
};
exports.mapFieldMetadataTypeToDataType = mapFieldMetadataTypeToDataType;
//# sourceMappingURL=map-field-metadata-type-to-data-type.util.js.map