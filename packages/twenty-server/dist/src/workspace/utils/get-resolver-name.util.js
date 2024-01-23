"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResolverName = void 0;
const camel_case_1 = require("../../utils/camel-case");
const pascal_case_1 = require("../../utils/pascal-case");
const getResolverName = (objectMetadata, type) => {
    switch (type) {
        case 'findMany':
            return `${(0, camel_case_1.camelCase)(objectMetadata.namePlural)}`;
        case 'findOne':
            return `${(0, camel_case_1.camelCase)(objectMetadata.nameSingular)}`;
        case 'createMany':
            return `create${(0, pascal_case_1.pascalCase)(objectMetadata.namePlural)}`;
        case 'createOne':
            return `create${(0, pascal_case_1.pascalCase)(objectMetadata.nameSingular)}`;
        case 'updateOne':
            return `update${(0, pascal_case_1.pascalCase)(objectMetadata.nameSingular)}`;
        case 'deleteOne':
            return `delete${(0, pascal_case_1.pascalCase)(objectMetadata.nameSingular)}`;
        case 'executeQuickActionOnOne':
            return `executeQuickActionOn${(0, pascal_case_1.pascalCase)(objectMetadata.nameSingular)}`;
        case 'updateMany':
            return `update${(0, pascal_case_1.pascalCase)(objectMetadata.namePlural)}`;
        case 'deleteMany':
            return `delete${(0, pascal_case_1.pascalCase)(objectMetadata.namePlural)}`;
        default:
            throw new Error(`Unknown resolver type: ${type}`);
    }
};
exports.getResolverName = getResolverName;
//# sourceMappingURL=get-resolver-name.util.js.map