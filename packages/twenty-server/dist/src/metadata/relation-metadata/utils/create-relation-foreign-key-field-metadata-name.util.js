"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRelationForeignKeyFieldMetadataName = void 0;
const camel_case_1 = require("../../../utils/camel-case");
const createRelationForeignKeyFieldMetadataName = (name) => {
    return `${(0, camel_case_1.camelCase)(name)}Id`;
};
exports.createRelationForeignKeyFieldMetadataName = createRelationForeignKeyFieldMetadataName;
//# sourceMappingURL=create-relation-foreign-key-field-metadata-name.util.js.map