"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCompositeFieldMetadataType = void 0;
const field_metadata_entity_1 = require("../field-metadata.entity");
const isCompositeFieldMetadataType = (type) => {
    return (type === field_metadata_entity_1.FieldMetadataType.LINK ||
        type === field_metadata_entity_1.FieldMetadataType.CURRENCY ||
        type === field_metadata_entity_1.FieldMetadataType.FULL_NAME);
};
exports.isCompositeFieldMetadataType = isCompositeFieldMetadataType;
//# sourceMappingURL=is-composite-field-metadata-type.util.js.map