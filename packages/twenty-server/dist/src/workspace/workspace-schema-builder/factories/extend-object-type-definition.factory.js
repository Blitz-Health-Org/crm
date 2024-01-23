"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ExtendObjectTypeDefinitionFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendObjectTypeDefinitionFactory = exports.ObjectTypeDefinitionKind = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const type_definitions_storage_1 = require("../storages/type-definitions.storage");
const object_contains_relation_field_1 = require("../utils/object-contains-relation-field");
const get_resolver_args_util_1 = require("../utils/get-resolver-args.util");
const is_relation_field_metadata_type_util_1 = require("../../utils/is-relation-field-metadata-type.util");
const deduce_relation_direction_util_1 = require("../../utils/deduce-relation-direction.util");
const relation_metadata_entity_1 = require("../../../metadata/relation-metadata/relation-metadata.entity");
const relation_type_factory_1 = require("./relation-type.factory");
const args_factory_1 = require("./args.factory");
var ObjectTypeDefinitionKind;
(function (ObjectTypeDefinitionKind) {
    ObjectTypeDefinitionKind["Connection"] = "Connection";
    ObjectTypeDefinitionKind["Edge"] = "Edge";
    ObjectTypeDefinitionKind["Plain"] = "";
})(ObjectTypeDefinitionKind || (exports.ObjectTypeDefinitionKind = ObjectTypeDefinitionKind = {}));
let ExtendObjectTypeDefinitionFactory = ExtendObjectTypeDefinitionFactory_1 = class ExtendObjectTypeDefinitionFactory {
    constructor(relationTypeFactory, argsFactory, typeDefinitionsStorage) {
        this.relationTypeFactory = relationTypeFactory;
        this.argsFactory = argsFactory;
        this.typeDefinitionsStorage = typeDefinitionsStorage;
        this.logger = new common_1.Logger(ExtendObjectTypeDefinitionFactory_1.name);
    }
    create(objectMetadata, options) {
        const kind = ObjectTypeDefinitionKind.Plain;
        const gqlType = this.typeDefinitionsStorage.getObjectTypeByKey(objectMetadata.id, kind);
        const containsRelationField = (0, object_contains_relation_field_1.objectContainsRelationField)(objectMetadata);
        if (!gqlType) {
            this.logger.error(`Could not find a GraphQL type for ${objectMetadata.id.toString()}`, {
                objectMetadata,
                options,
            });
            throw new Error(`Could not find a GraphQL type for ${objectMetadata.id.toString()}`);
        }
        if (!containsRelationField) {
            this.logger.error(`This object does not need to be extended: ${objectMetadata.id.toString()}`, {
                objectMetadata,
                options,
            });
            throw new Error(`This object does not need to be extended: ${objectMetadata.id.toString()}`);
        }
        const config = gqlType.toConfig();
        return {
            target: objectMetadata.id,
            kind,
            type: new graphql_1.GraphQLObjectType(Object.assign(Object.assign({}, config), { fields: () => (Object.assign(Object.assign({}, config.fields), this.generateFields(objectMetadata, options))) })),
        };
    }
    generateFields(objectMetadata, options) {
        var _a;
        const fields = {};
        for (const fieldMetadata of objectMetadata.fields) {
            if (!(0, is_relation_field_metadata_type_util_1.isRelationFieldMetadataType)(fieldMetadata.type)) {
                continue;
            }
            const relationMetadata = (_a = fieldMetadata.fromRelationMetadata) !== null && _a !== void 0 ? _a : fieldMetadata.toRelationMetadata;
            if (!relationMetadata) {
                this.logger.error(`Could not find a relation metadata for ${fieldMetadata.id}`, { fieldMetadata });
                throw new Error(`Could not find a relation metadata for ${fieldMetadata.id}`);
            }
            const relationDirection = (0, deduce_relation_direction_util_1.deduceRelationDirection)(fieldMetadata.objectMetadataId, relationMetadata);
            const relationType = this.relationTypeFactory.create(fieldMetadata, relationMetadata, relationDirection);
            let argsType = undefined;
            if (relationMetadata.relationType === relation_metadata_entity_1.RelationMetadataType.ONE_TO_MANY &&
                relationDirection === deduce_relation_direction_util_1.RelationDirection.FROM) {
                const args = (0, get_resolver_args_util_1.getResolverArgs)('findMany');
                argsType = this.argsFactory.create({
                    args,
                    objectMetadataId: relationMetadata.toObjectMetadataId,
                }, options);
            }
            fields[fieldMetadata.name] = {
                type: relationType,
                args: argsType,
                description: fieldMetadata.description,
            };
        }
        return fields;
    }
};
exports.ExtendObjectTypeDefinitionFactory = ExtendObjectTypeDefinitionFactory;
exports.ExtendObjectTypeDefinitionFactory = ExtendObjectTypeDefinitionFactory = ExtendObjectTypeDefinitionFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [relation_type_factory_1.RelationTypeFactory,
        args_factory_1.ArgsFactory,
        type_definitions_storage_1.TypeDefinitionsStorage])
], ExtendObjectTypeDefinitionFactory);
//# sourceMappingURL=extend-object-type-definition.factory.js.map