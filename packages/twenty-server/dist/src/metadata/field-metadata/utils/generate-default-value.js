"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateDefaultValue = void 0;
const field_metadata_entity_1 = require("../field-metadata.entity");
function generateDefaultValue(type) {
    switch (type) {
        case field_metadata_entity_1.FieldMetadataType.TEXT:
        case field_metadata_entity_1.FieldMetadataType.PHONE:
        case field_metadata_entity_1.FieldMetadataType.EMAIL:
            return {
                value: '',
            };
        case field_metadata_entity_1.FieldMetadataType.FULL_NAME:
            return {
                firstName: '',
                lastName: '',
            };
        default:
            return null;
    }
}
exports.generateDefaultValue = generateDefaultValue;
//# sourceMappingURL=generate-default-value.js.map