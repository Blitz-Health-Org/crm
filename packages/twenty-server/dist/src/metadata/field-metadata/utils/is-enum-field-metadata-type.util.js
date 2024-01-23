"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnumFieldMetadataType = void 0;
const field_metadata_entity_1 = require("../field-metadata.entity");
const isEnumFieldMetadataType = (type) => {
    return (type === field_metadata_entity_1.FieldMetadataType.RATING ||
        type === field_metadata_entity_1.FieldMetadataType.SELECT ||
        type === field_metadata_entity_1.FieldMetadataType.MULTI_SELECT);
};
exports.isEnumFieldMetadataType = isEnumFieldMetadataType;
//# sourceMappingURL=is-enum-field-metadata-type.util.js.map