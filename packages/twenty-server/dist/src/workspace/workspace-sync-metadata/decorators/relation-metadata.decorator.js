"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationMetadata = void 0;
require("reflect-metadata");
const typed_reflect_1 = require("../../../utils/typed-reflect");
const convert_class_to_object_metadata_name_util_1 = require("../utils/convert-class-to-object-metadata-name.util");
function RelationMetadata(params) {
    return (target, fieldKey) => {
        var _a, _b;
        const existingRelationMetadata = (_a = typed_reflect_1.TypedReflect.getMetadata('relationMetadata', target.constructor)) !== null && _a !== void 0 ? _a : [];
        const gate = typed_reflect_1.TypedReflect.getMetadata('gate', target, fieldKey);
        const objectName = (0, convert_class_to_object_metadata_name_util_1.convertClassNameToObjectMetadataName)(target.constructor.name);
        Reflect.defineMetadata('relationMetadata', [
            ...existingRelationMetadata,
            {
                type: params.type,
                fromObjectNameSingular: objectName,
                toObjectNameSingular: params.objectName,
                fromFieldMetadataName: fieldKey,
                toFieldMetadataName: (_b = params.inverseSideFieldName) !== null && _b !== void 0 ? _b : objectName,
                gate,
            },
        ], target.constructor);
    };
}
exports.RelationMetadata = RelationMetadata;
//# sourceMappingURL=relation-metadata.decorator.js.map