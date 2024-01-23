"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRelationFieldMetadataType = void 0;
const field_metadata_entity_1 = require("../../metadata/field-metadata/field-metadata.entity");
const isRelationFieldMetadataType = (type) => {
    return type === field_metadata_entity_1.FieldMetadataType.RELATION;
};
exports.isRelationFieldMetadataType = isRelationFieldMetadataType;
//# sourceMappingURL=is-relation-field-metadata-type.util.js.map