"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRelationForeignKeyColumnName = void 0;
const create_custom_column_name_util_1 = require("../../utils/create-custom-column-name.util");
const camel_case_1 = require("../../../utils/camel-case");
const createRelationForeignKeyColumnName = (name, isCustom) => {
    const baseColumnName = `${(0, camel_case_1.camelCase)(name)}Id`;
    const foreignKeyColumnName = isCustom
        ? (0, create_custom_column_name_util_1.createCustomColumnName)(baseColumnName)
        : baseColumnName;
    return foreignKeyColumnName;
};
exports.createRelationForeignKeyColumnName = createRelationForeignKeyColumnName;
//# sourceMappingURL=create-relation-foreign-key-column-name.util.js.map