"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFieldMetadataType = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const typeOrmTypeMapping = new Map([
    ['uuid', field_metadata_entity_1.FieldMetadataType.UUID],
    ['timestamp', field_metadata_entity_1.FieldMetadataType.DATE_TIME],
]);
const getFieldMetadataType = (type) => {
    const fieldType = typeOrmTypeMapping.get(type);
    if (fieldType === undefined || fieldType === null) {
        throw new Error(`Unknown type ${type}`);
    }
    return fieldType;
};
exports.getFieldMetadataType = getFieldMetadataType;
//# sourceMappingURL=get-field-metadata-type.util.js.map