"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linkObjectDefinition = exports.linkFields = void 0;
const field_metadata_entity_1 = require("../field-metadata.entity");
const generate_target_column_map_util_1 = require("../utils/generate-target-column-map.util");
const linkFields = (fieldMetadata) => {
    var _a, _b, _c, _d, _e;
    const inferredFieldMetadata = fieldMetadata;
    const targetColumnMap = inferredFieldMetadata
        ? (0, generate_target_column_map_util_1.generateTargetColumnMap)(inferredFieldMetadata.type, (_a = inferredFieldMetadata.isCustom) !== null && _a !== void 0 ? _a : false, inferredFieldMetadata.name)
        : {
            label: 'label',
            url: 'url',
        };
    return [
        Object.assign({ id: 'label', type: field_metadata_entity_1.FieldMetadataType.TEXT, objectMetadataId: field_metadata_entity_1.FieldMetadataType.LINK.toString(), name: 'label', label: 'Label', targetColumnMap: {
                value: targetColumnMap.label,
            }, isNullable: true }, (inferredFieldMetadata
            ? {
                defaultValue: {
                    value: (_c = (_b = inferredFieldMetadata.defaultValue) === null || _b === void 0 ? void 0 : _b.label) !== null && _c !== void 0 ? _c : null,
                },
            }
            : {})),
        Object.assign({ id: 'url', type: field_metadata_entity_1.FieldMetadataType.TEXT, objectMetadataId: field_metadata_entity_1.FieldMetadataType.LINK.toString(), name: 'url', label: 'Url', targetColumnMap: {
                value: targetColumnMap.url,
            }, isNullable: true }, (inferredFieldMetadata
            ? {
                defaultValue: {
                    value: (_e = (_d = inferredFieldMetadata.defaultValue) === null || _d === void 0 ? void 0 : _d.url) !== null && _e !== void 0 ? _e : null,
                },
            }
            : {})),
    ];
};
exports.linkFields = linkFields;
exports.linkObjectDefinition = {
    id: field_metadata_entity_1.FieldMetadataType.LINK.toString(),
    nameSingular: 'link',
    namePlural: 'link',
    labelSingular: 'Link',
    labelPlural: 'Link',
    targetTableName: '',
    fields: (0, exports.linkFields)(),
    fromRelations: [],
    toRelations: [],
    isActive: true,
    isSystem: true,
    isCustom: false,
};
//# sourceMappingURL=link.composite-type.js.map