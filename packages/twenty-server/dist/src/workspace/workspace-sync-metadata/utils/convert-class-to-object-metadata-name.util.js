"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertClassNameToObjectMetadataName = void 0;
const camel_case_1 = require("../../../utils/camel-case");
const convertClassNameToObjectMetadataName = (name) => {
    const classSuffix = 'ObjectMetadata';
    let objectName = (0, camel_case_1.camelCase)(name);
    if (objectName.endsWith(classSuffix)) {
        objectName = objectName.slice(0, -classSuffix.length);
    }
    return objectName;
};
exports.convertClassNameToObjectMetadataName = convertClassNameToObjectMetadataName;
//# sourceMappingURL=convert-class-to-object-metadata-name.util.js.map