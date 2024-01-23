"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResolverArgs = void 0;
const field_metadata_entity_1 = require("../../../metadata/field-metadata/field-metadata.entity");
const input_type_definition_factory_1 = require("../factories/input-type-definition.factory");
const getResolverArgs = (type) => {
    switch (type) {
        case 'findMany':
            return {
                first: {
                    type: field_metadata_entity_1.FieldMetadataType.NUMBER,
                    isNullable: true,
                },
                last: {
                    type: field_metadata_entity_1.FieldMetadataType.NUMBER,
                    isNullable: true,
                },
                before: {
                    type: field_metadata_entity_1.FieldMetadataType.TEXT,
                    isNullable: true,
                },
                after: {
                    type: field_metadata_entity_1.FieldMetadataType.TEXT,
                    isNullable: true,
                },
                filter: {
                    kind: input_type_definition_factory_1.InputTypeDefinitionKind.Filter,
                    isNullable: true,
                },
                orderBy: {
                    kind: input_type_definition_factory_1.InputTypeDefinitionKind.OrderBy,
                    isNullable: true,
                },
            };
        case 'findOne':
        case 'deleteMany':
            return {
                filter: {
                    kind: input_type_definition_factory_1.InputTypeDefinitionKind.Filter,
                    isNullable: false,
                },
            };
        case 'createMany':
            return {
                data: {
                    kind: input_type_definition_factory_1.InputTypeDefinitionKind.Create,
                    isNullable: false,
                    isArray: true,
                },
            };
        case 'createOne':
            return {
                data: {
                    kind: input_type_definition_factory_1.InputTypeDefinitionKind.Create,
                    isNullable: false,
                },
            };
        case 'updateOne':
            return {
                id: {
                    type: field_metadata_entity_1.FieldMetadataType.UUID,
                    isNullable: false,
                },
                data: {
                    kind: input_type_definition_factory_1.InputTypeDefinitionKind.Update,
                    isNullable: false,
                },
            };
        case 'deleteOne':
            return {
                id: {
                    type: field_metadata_entity_1.FieldMetadataType.UUID,
                    isNullable: false,
                },
            };
        case 'executeQuickActionOnOne':
            return {
                id: {
                    type: field_metadata_entity_1.FieldMetadataType.UUID,
                    isNullable: false,
                },
            };
        case 'updateMany':
            return {
                data: {
                    kind: input_type_definition_factory_1.InputTypeDefinitionKind.Update,
                    isNullable: false,
                },
                filter: {
                    kind: input_type_definition_factory_1.InputTypeDefinitionKind.Filter,
                    isNullable: false,
                },
            };
        default:
            throw new Error(`Unknown resolver type: ${type}`);
    }
};
exports.getResolverArgs = getResolverArgs;
//# sourceMappingURL=get-resolver-args.util.js.map