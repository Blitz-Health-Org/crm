"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.computeParameterComponents = exports.computeSchemaComponents = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const capitalize_1 = require("../../../utils/capitalize");
const parameters_utils_1 = require("./parameters.utils");
const getSchemaComponentsProperties = (item) => {
    return item.fields.reduce((node, field) => {
        var _a, _b;
        let itemProperty = {};
        switch (field.type) {
            case field_metadata_entity_1.FieldMetadataType.UUID:
            case field_metadata_entity_1.FieldMetadataType.TEXT:
            case field_metadata_entity_1.FieldMetadataType.PHONE:
            case field_metadata_entity_1.FieldMetadataType.EMAIL:
            case field_metadata_entity_1.FieldMetadataType.DATE_TIME:
                itemProperty.type = 'string';
                break;
            case field_metadata_entity_1.FieldMetadataType.NUMBER:
            case field_metadata_entity_1.FieldMetadataType.NUMERIC:
            case field_metadata_entity_1.FieldMetadataType.PROBABILITY:
            case field_metadata_entity_1.FieldMetadataType.RATING:
                itemProperty.type = 'number';
                break;
            case field_metadata_entity_1.FieldMetadataType.BOOLEAN:
                itemProperty.type = 'boolean';
                break;
            case field_metadata_entity_1.FieldMetadataType.RELATION:
                if ((_a = field.fromRelationMetadata) === null || _a === void 0 ? void 0 : _a.toObjectMetadata.nameSingular) {
                    itemProperty = {
                        type: 'array',
                        items: {
                            $ref: `#/components/schemas/${(0, capitalize_1.capitalize)(((_b = field.fromRelationMetadata) === null || _b === void 0 ? void 0 : _b.toObjectMetadata.nameSingular) || '')}`,
                        },
                    };
                }
                break;
            case field_metadata_entity_1.FieldMetadataType.LINK:
            case field_metadata_entity_1.FieldMetadataType.CURRENCY:
            case field_metadata_entity_1.FieldMetadataType.FULL_NAME:
                itemProperty = {
                    type: 'object',
                    properties: Object.keys(field.targetColumnMap).reduce((properties, key) => {
                        properties[key] = { type: 'string' };
                        return properties;
                    }, {}),
                };
                break;
            default:
                itemProperty.type = 'string';
                break;
        }
        if (Object.keys(itemProperty).length) {
            node[field.name] = itemProperty;
        }
        return node;
    }, {});
};
const getRequiredFields = (item) => {
    return item.fields.reduce((required, field) => {
        if (!field.isNullable && field.defaultValue === null) {
            required.push(field.name);
            return required;
        }
        return required;
    }, []);
};
const computeSchemaComponent = (item) => {
    const result = {
        type: 'object',
        properties: getSchemaComponentsProperties(item),
        example: {},
    };
    const requiredFields = getRequiredFields(item);
    if (requiredFields === null || requiredFields === void 0 ? void 0 : requiredFields.length) {
        result.required = requiredFields;
        result.example = requiredFields.reduce((example, requiredField) => {
            example[requiredField] = '';
            return example;
        }, {});
    }
    return result;
};
const computeSchemaComponents = (objectMetadataItems) => {
    return objectMetadataItems.reduce((schemas, item) => {
        schemas[(0, capitalize_1.capitalize)(item.nameSingular)] = computeSchemaComponent(item);
        return schemas;
    }, {});
};
exports.computeSchemaComponents = computeSchemaComponents;
const computeParameterComponents = () => {
    return {
        idPath: (0, parameters_utils_1.computeIdPathParameter)(),
        lastCursor: (0, parameters_utils_1.computeLastCursorParameters)(),
        filter: (0, parameters_utils_1.computeFilterParameters)(),
        depth: (0, parameters_utils_1.computeDepthParameters)(),
        orderBy: (0, parameters_utils_1.computeOrderByParameters)(),
        limit: (0, parameters_utils_1.computeLimitParameters)(),
    };
};
exports.computeParameterComponents = computeParameterComponents;
//# sourceMappingURL=components.utils.js.map