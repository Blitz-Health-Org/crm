"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanEntityName = void 0;
const camel_case_1 = require("../../../utils/camel-case");
const cleanEntityName = (entityName) => {
    let camelCasedEntityName = entityName.replace(/^[0-9]+/, '');
    camelCasedEntityName = camelCasedEntityName.trim();
    camelCasedEntityName = (0, camel_case_1.camelCase)(camelCasedEntityName);
    camelCasedEntityName = camelCasedEntityName.replace(/[^a-zA-Z0-9]/g, '');
    return camelCasedEntityName;
};
exports.cleanEntityName = cleanEntityName;
//# sourceMappingURL=clean-entity-name.util.js.map