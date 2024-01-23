"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapFieldMetadataToGraphqlQuery = void 0;
const field_metadata_entity_1 = require("../../../../metadata/field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../../../../metadata/relation-metadata/relation-metadata.entity");
const DEFAULT_DEPTH_VALUE = 2;
const mapFieldMetadataToGraphqlQuery = (objectMetadataItems, field, maxDepthForRelations = DEFAULT_DEPTH_VALUE) => {
    var _a, _b, _c, _d;
    if (maxDepthForRelations <= 0) {
        return '';
    }
    const fieldType = field.type;
    const fieldIsSimpleValue = [
        field_metadata_entity_1.FieldMetadataType.UUID,
        field_metadata_entity_1.FieldMetadataType.TEXT,
        field_metadata_entity_1.FieldMetadataType.PHONE,
        field_metadata_entity_1.FieldMetadataType.DATE_TIME,
        field_metadata_entity_1.FieldMetadataType.EMAIL,
        field_metadata_entity_1.FieldMetadataType.NUMBER,
        field_metadata_entity_1.FieldMetadataType.BOOLEAN,
    ].includes(fieldType);
    if (fieldIsSimpleValue) {
        return field.name;
    }
    else if (fieldType === field_metadata_entity_1.FieldMetadataType.RELATION &&
        ((_a = field.toRelationMetadata) === null || _a === void 0 ? void 0 : _a.relationType) === relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY) {
        const relationMetadataItem = objectMetadataItems.find((objectMetadataItem) => {
            var _a;
            return objectMetadataItem.id ===
                ((_a = field.toRelationMetadata) === null || _a === void 0 ? void 0 : _a.fromObjectMetadataId);
        });
        return `${field.name}
    {
      id
      ${((_b = relationMetadataItem === null || relationMetadataItem === void 0 ? void 0 : relationMetadataItem.fields) !== null && _b !== void 0 ? _b : [])
            .filter((field) => field.type !== field_metadata_entity_1.FieldMetadataType.RELATION)
            .map((field) => (0, exports.mapFieldMetadataToGraphqlQuery)(objectMetadataItems, field, maxDepthForRelations - 1))
            .join('\n')}
    }`;
    }
    else if (fieldType === field_metadata_entity_1.FieldMetadataType.RELATION &&
        ((_c = field.fromRelationMetadata) === null || _c === void 0 ? void 0 : _c.relationType) ===
            relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY) {
        const relationMetadataItem = objectMetadataItems.find((objectMetadataItem) => {
            var _a;
            return objectMetadataItem.id ===
                ((_a = field.fromRelationMetadata) === null || _a === void 0 ? void 0 : _a.toObjectMetadataId);
        });
        return `${field.name}
      {
        edges {
          node {
            id
            ${((_d = relationMetadataItem === null || relationMetadataItem === void 0 ? void 0 : relationMetadataItem.fields) !== null && _d !== void 0 ? _d : [])
            .filter((field) => field.type !== field_metadata_entity_1.FieldMetadataType.RELATION)
            .map((field) => (0, exports.mapFieldMetadataToGraphqlQuery)(objectMetadataItems, field, maxDepthForRelations - 1))
            .join('\n')}
          }
        }
      }`;
    }
    else if (fieldType === field_metadata_entity_1.FieldMetadataType.LINK) {
        return `
      ${field.name}
      {
        label
        url
      }
    `;
    }
    else if (fieldType === field_metadata_entity_1.FieldMetadataType.CURRENCY) {
        return `
      ${field.name}
      {
        amountMicros
        currencyCode
      }
    `;
    }
    else if (fieldType === field_metadata_entity_1.FieldMetadataType.FULL_NAME) {
        return `
      ${field.name}
      {
        firstName
        lastName
      }
    `;
    }
};
exports.mapFieldMetadataToGraphqlQuery = mapFieldMetadataToGraphqlQuery;
//# sourceMappingURL=map-field-metadata-to-graphql-query.utils.js.map