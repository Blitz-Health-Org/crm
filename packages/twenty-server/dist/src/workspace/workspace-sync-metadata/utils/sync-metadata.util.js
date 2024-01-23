"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertStringifiedFieldsToJSON = exports.mapObjectMetadataByUniqueIdentifier = exports.filterIgnoredProperties = void 0;
const filterIgnoredProperties = (obj, propertiesToIgnore, mapFunction) => {
    return Object.fromEntries(Object.entries(obj)
        .filter(([key]) => !propertiesToIgnore.includes(key))
        .map(([key, value]) => [key, mapFunction ? mapFunction(value) : value]));
};
exports.filterIgnoredProperties = filterIgnoredProperties;
const mapObjectMetadataByUniqueIdentifier = (arr) => {
    return arr.reduce((acc, curr) => {
        acc[curr.nameSingular] = Object.assign(Object.assign({}, curr), { fields: curr.fields.reduce((acc, curr) => {
                acc[curr.name] = curr;
                return acc;
            }, {}) });
        return acc;
    }, {});
};
exports.mapObjectMetadataByUniqueIdentifier = mapObjectMetadataByUniqueIdentifier;
const convertStringifiedFieldsToJSON = (fieldMetadata) => {
    if (fieldMetadata.targetColumnMap) {
        fieldMetadata.targetColumnMap = JSON.parse(fieldMetadata.targetColumnMap);
    }
    if (fieldMetadata.defaultValue) {
        fieldMetadata.defaultValue = JSON.parse(fieldMetadata.defaultValue);
    }
    if (fieldMetadata.options) {
        fieldMetadata.options = JSON.parse(fieldMetadata.options);
    }
    return fieldMetadata;
};
exports.convertStringifiedFieldsToJSON = convertStringifiedFieldsToJSON;
//# sourceMappingURL=sync-metadata.util.js.map