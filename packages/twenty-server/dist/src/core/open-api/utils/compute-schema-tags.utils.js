"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeSchemaTags = void 0;
const capitalize_1 = require("../../../utils/capitalize");
const computeSchemaTags = (items) => {
    const results = [{ name: 'General', description: 'General requests' }];
    items.forEach((item) => {
        results.push({
            name: item.namePlural,
            description: `Object \`${(0, capitalize_1.capitalize)(item.namePlural)}\``,
        });
    });
    return results;
};
exports.computeSchemaTags = computeSchemaTags;
//# sourceMappingURL=compute-schema-tags.utils.js.map