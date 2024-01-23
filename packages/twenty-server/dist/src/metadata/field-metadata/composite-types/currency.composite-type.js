"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyObjectDefinition = exports.currencyFields = void 0;
const field_metadata_entity_1 = require("../field-metadata.entity");
const generate_target_column_map_util_1 = require("../utils/generate-target-column-map.util");
const currencyFields = (fieldMetadata) => {
    var _a, _b, _c, _d, _e;
    const inferredFieldMetadata = fieldMetadata;
    const targetColumnMap = inferredFieldMetadata
        ? (0, generate_target_column_map_util_1.generateTargetColumnMap)(inferredFieldMetadata.type, (_a = inferredFieldMetadata.isCustom) !== null && _a !== void 0 ? _a : false, inferredFieldMetadata.name)
        : {
            amountMicros: 'amountMicros',
            currencyCode: 'currencyCode',
        };
    return [
        Object.assign({ id: 'amountMicros', type: field_metadata_entity_1.FieldMetadataType.NUMERIC, objectMetadataId: field_metadata_entity_1.FieldMetadataType.CURRENCY.toString(), name: 'amountMicros', label: 'AmountMicros', targetColumnMap: {
                value: targetColumnMap.amountMicros,
            }, isNullable: true }, (inferredFieldMetadata
            ? {
                defaultValue: {
                    value: (_c = (_b = inferredFieldMetadata.defaultValue) === null || _b === void 0 ? void 0 : _b.amountMicros) !== null && _c !== void 0 ? _c : null,
                },
            }
            : {})),
        Object.assign({ id: 'currencyCode', type: field_metadata_entity_1.FieldMetadataType.TEXT, objectMetadataId: field_metadata_entity_1.FieldMetadataType.CURRENCY.toString(), name: 'currencyCode', label: 'Currency Code', targetColumnMap: {
                value: targetColumnMap.currencyCode,
            }, isNullable: true }, (inferredFieldMetadata
            ? {
                defaultValue: {
                    value: (_e = (_d = inferredFieldMetadata.defaultValue) === null || _d === void 0 ? void 0 : _d.currencyCode) !== null && _e !== void 0 ? _e : null,
                },
            }
            : {})),
    ];
};
exports.currencyFields = currencyFields;
exports.currencyObjectDefinition = {
    id: field_metadata_entity_1.FieldMetadataType.CURRENCY.toString(),
    nameSingular: 'currency',
    namePlural: 'currency',
    labelSingular: 'Currency',
    labelPlural: 'Currency',
    targetTableName: '',
    fields: (0, exports.currencyFields)(),
    fromRelations: [],
    toRelations: [],
    isActive: true,
    isSystem: true,
    isCustom: false,
};
//# sourceMappingURL=currency.composite-type.js.map