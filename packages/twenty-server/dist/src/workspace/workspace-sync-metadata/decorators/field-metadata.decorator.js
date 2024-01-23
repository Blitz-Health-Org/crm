"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMetadata = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const generate_target_column_map_util_1 = require("../../../metadata/field-metadata/utils/generate-target-column-map.util");
const generate_default_value_1 = require("../../../metadata/field-metadata/utils/generate-default-value");
const typed_reflect_1 = require("../../../utils/typed-reflect");
function FieldMetadata(params) {
    return (target, fieldKey) => {
        var _a, _b, _c;
        const existingFieldMetadata = (_a = typed_reflect_1.TypedReflect.getMetadata('fieldMetadata', target.constructor)) !== null && _a !== void 0 ? _a : {};
        const isNullable = (_b = typed_reflect_1.TypedReflect.getMetadata('isNullable', target, fieldKey)) !== null && _b !== void 0 ? _b : false;
        const isSystem = (_c = typed_reflect_1.TypedReflect.getMetadata('isSystem', target, fieldKey)) !== null && _c !== void 0 ? _c : false;
        const gate = typed_reflect_1.TypedReflect.getMetadata('gate', target, fieldKey);
        const { joinColumn } = params, restParams = __rest(params, ["joinColumn"]);
        typed_reflect_1.TypedReflect.defineMetadata('fieldMetadata', Object.assign(Object.assign(Object.assign({}, existingFieldMetadata), { [fieldKey]: generateFieldMetadata(restParams, fieldKey, isNullable, isSystem, gate) }), (joinColumn && restParams.type === field_metadata_entity_1.FieldMetadataType.RELATION
            ? {
                [joinColumn]: generateFieldMetadata(Object.assign(Object.assign({}, restParams), { type: field_metadata_entity_1.FieldMetadataType.UUID, label: `${restParams.label} id (foreign key)`, description: `${restParams.description} id foreign key`, defaultValue: null, options: undefined }), joinColumn, isNullable, true, gate),
            }
            : {})), target.constructor);
    };
}
exports.FieldMetadata = FieldMetadata;
function generateFieldMetadata(params, fieldKey, isNullable, isSystem, gate = undefined) {
    var _a;
    const targetColumnMap = (0, generate_target_column_map_util_1.generateTargetColumnMap)(params.type, false, fieldKey);
    const defaultValue = (_a = params.defaultValue) !== null && _a !== void 0 ? _a : (0, generate_default_value_1.generateDefaultValue)(params.type);
    return Object.assign(Object.assign({ name: fieldKey }, params), { targetColumnMap: JSON.stringify(targetColumnMap), isNullable: params.type === field_metadata_entity_1.FieldMetadataType.RELATION ? true : isNullable, isSystem, isCustom: false, options: params.options ? JSON.stringify(params.options) : null, description: params.description, icon: params.icon, defaultValue: defaultValue ? JSON.stringify(defaultValue) : null, gate });
}
//# sourceMappingURL=field-metadata.decorator.js.map