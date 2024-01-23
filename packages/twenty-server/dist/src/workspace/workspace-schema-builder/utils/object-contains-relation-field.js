"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectContainsRelationField = void 0;
const is_relation_field_metadata_type_util_1 = require("../../utils/is-relation-field-metadata-type.util");
const objectContainsRelationField = (objectMetadata) => {
    return objectMetadata.fields.some((field) => (0, is_relation_field_metadata_type_util_1.isRelationFieldMetadataType)(field.type));
};
exports.objectContainsRelationField = objectContainsRelationField;
//# sourceMappingURL=object-contains-relation-field.js.map