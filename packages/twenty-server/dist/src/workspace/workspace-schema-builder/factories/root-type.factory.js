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
var RootTypeFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootTypeFactory = exports.ObjectTypeName = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const type_definitions_storage_1 = require("../storages/type-definitions.storage");
const get_resolver_name_util_1 = require("../../utils/get-resolver-name.util");
const get_resolver_args_util_1 = require("../utils/get-resolver-args.util");
const type_mapper_service_1 = require("../services/type-mapper.service");
const args_factory_1 = require("./args.factory");
const object_type_definition_factory_1 = require("./object-type-definition.factory");
var ObjectTypeName;
(function (ObjectTypeName) {
    ObjectTypeName["Query"] = "Query";
    ObjectTypeName["Mutation"] = "Mutation";
    ObjectTypeName["Subscription"] = "Subscription";
})(ObjectTypeName || (exports.ObjectTypeName = ObjectTypeName = {}));
let RootTypeFactory = RootTypeFactory_1 = class RootTypeFactory {
    constructor(typeDefinitionsStorage, typeMapperService, argsFactory) {
        this.typeDefinitionsStorage = typeDefinitionsStorage;
        this.typeMapperService = typeMapperService;
        this.argsFactory = argsFactory;
        this.logger = new common_1.Logger(RootTypeFactory_1.name);
    }
    create(objectMetadataCollection, workspaceResolverMethodNames, objectTypeName, options) {
        if (workspaceResolverMethodNames.length === 0) {
            this.logger.error(`No resolver methods were found for ${objectTypeName.toString()}`, {
                workspaceResolverMethodNames,
                objectTypeName,
                options,
            });
            throw new Error(`No resolvers were found for ${objectTypeName.toString()}`);
        }
        return new graphql_1.GraphQLObjectType({
            name: objectTypeName.toString(),
            fields: this.generateFields(objectMetadataCollection, workspaceResolverMethodNames, options),
        });
    }
    generateFields(objectMetadataCollection, workspaceResolverMethodNames, options) {
        const fieldConfigMap = {};
        for (const objectMetadata of objectMetadataCollection) {
            for (const methodName of workspaceResolverMethodNames) {
                const name = (0, get_resolver_name_util_1.getResolverName)(objectMetadata, methodName);
                const args = (0, get_resolver_args_util_1.getResolverArgs)(methodName);
                const objectType = this.typeDefinitionsStorage.getObjectTypeByKey(objectMetadata.id, methodName === 'findMany'
                    ? object_type_definition_factory_1.ObjectTypeDefinitionKind.Connection
                    : object_type_definition_factory_1.ObjectTypeDefinitionKind.Plain);
                const argsType = this.argsFactory.create({
                    args,
                    objectMetadataId: objectMetadata.id,
                }, options);
                if (!objectType) {
                    this.logger.error(`Could not find a GraphQL type for ${objectMetadata.id} for method ${methodName}`, {
                        objectMetadata,
                        methodName,
                        options,
                    });
                    throw new Error(`Could not find a GraphQL type for ${objectMetadata.id} for method ${methodName}`);
                }
                const outputType = this.typeMapperService.mapToGqlType(objectType, {
                    isArray: ['updateMany', 'deleteMany', 'createMany'].includes(methodName),
                });
                fieldConfigMap[name] = {
                    type: outputType,
                    args: argsType,
                    resolve: undefined,
                };
            }
        }
        return fieldConfigMap;
    }
};
exports.RootTypeFactory = RootTypeFactory;
exports.RootTypeFactory = RootTypeFactory = RootTypeFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [type_definitions_storage_1.TypeDefinitionsStorage,
        type_mapper_service_1.TypeMapperService,
        args_factory_1.ArgsFactory])
], RootTypeFactory);
//# sourceMappingURL=root-type.factory.js.map