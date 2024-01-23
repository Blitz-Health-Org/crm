"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectMetadata = void 0;
const typed_reflect_1 = require("../../../utils/typed-reflect");
const convert_class_to_object_metadata_name_util_1 = require("../utils/convert-class-to-object-metadata-name.util");
function ObjectMetadata(params) {
    return (target) => {
        var _a;
        const isSystem = (_a = typed_reflect_1.TypedReflect.getMetadata('isSystem', target)) !== null && _a !== void 0 ? _a : false;
        const gate = typed_reflect_1.TypedReflect.getMetadata('gate', target);
        const objectName = (0, convert_class_to_object_metadata_name_util_1.convertClassNameToObjectMetadataName)(target.name);
        typed_reflect_1.TypedReflect.defineMetadata('objectMetadata', Object.assign(Object.assign({ nameSingular: objectName }, params), { targetTableName: 'DEPRECATED', isSystem, isCustom: false, description: params.description, icon: params.icon, gate }), target);
    };
}
exports.ObjectMetadata = ObjectMetadata;
//# sourceMappingURL=object-metadata.decorator.js.map