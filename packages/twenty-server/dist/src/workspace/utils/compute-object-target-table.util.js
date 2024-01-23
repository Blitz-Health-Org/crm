"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeObjectTargetTable = void 0;
const computeObjectTargetTable = (objectMetadata) => {
    const prefix = objectMetadata.isCustom ? '_' : '';
    return `${prefix}${objectMetadata.nameSingular}`;
};
exports.computeObjectTargetTable = computeObjectTargetTable;
//# sourceMappingURL=compute-object-target-table.util.js.map