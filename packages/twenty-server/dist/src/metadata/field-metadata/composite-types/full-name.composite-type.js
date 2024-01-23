"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fullNameObjectDefinition = exports.fullNameFields = void 0;
const field_metadata_entity_1 = require("../field-metadata.entity");
const generate_target_column_map_util_1 = require("../utils/generate-target-column-map.util");
const fullNameFields = (fieldMetadata) => {
    var _a, _b, _c, _d, _e;
    const inferredFieldMetadata = fieldMetadata;
    const targetColumnMap = inferredFieldMetadata
        ? (0, generate_target_column_map_util_1.generateTargetColumnMap)(inferredFieldMetadata.type, (_a = inferredFieldMetadata.isCustom) !== null && _a !== void 0 ? _a : false, inferredFieldMetadata.name)
        : {
            firstName: 'firstName',
            lastName: 'lastName',
        };
    return [
        Object.assign({ id: 'firstName', type: field_metadata_entity_1.FieldMetadataType.TEXT, objectMetadataId: field_metadata_entity_1.FieldMetadataType.FULL_NAME.toString(), name: 'firstName', label: 'First Name', targetColumnMap: {
                value: targetColumnMap.firstName,
            }, isNullable: true }, (inferredFieldMetadata
            ? {
                defaultValue: {
                    value: (_c = (_b = inferredFieldMetadata.defaultValue) === null || _b === void 0 ? void 0 : _b.firstName) !== null && _c !== void 0 ? _c : null,
                },
            }
            : {})),
        Object.assign({ id: 'lastName', type: field_metadata_entity_1.FieldMetadataType.TEXT, objectMetadataId: field_metadata_entity_1.FieldMetadataType.FULL_NAME.toString(), name: 'lastName', label: 'Last Name', targetColumnMap: {
                value: targetColumnMap.lastName,
            }, isNullable: true }, (inferredFieldMetadata
            ? {
                defaultValue: {
                    value: (_e = (_d = inferredFieldMetadata.defaultValue) === null || _d === void 0 ? void 0 : _d.lastName) !== null && _e !== void 0 ? _e : null,
                },
            }
            : {})),
    ];
};
exports.fullNameFields = fullNameFields;
exports.fullNameObjectDefinition = {
    id: field_metadata_entity_1.FieldMetadataType.FULL_NAME.toString(),
    nameSingular: 'fullName',
    namePlural: 'fullName',
    labelSingular: 'FullName',
    labelPlural: 'FullName',
    targetTableName: '',
    fields: (0, exports.fullNameFields)(),
    fromRelations: [],
    toRelations: [],
    isActive: true,
    isSystem: true,
    isCustom: false,
};
//# sourceMappingURL=full-name.composite-type.js.map