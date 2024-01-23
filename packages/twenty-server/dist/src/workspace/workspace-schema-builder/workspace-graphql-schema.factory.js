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
var WorkspaceGraphQLSchemaFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceGraphQLSchemaFactory = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("graphql");
const type_definitions_generator_1 = require("./type-definitions.generator");
const query_type_factory_1 = require("./factories/query-type.factory");
const mutation_type_factory_1 = require("./factories/mutation-type.factory");
const orphaned_types_factory_1 = require("./factories/orphaned-types.factory");
let WorkspaceGraphQLSchemaFactory = WorkspaceGraphQLSchemaFactory_1 = class WorkspaceGraphQLSchemaFactory {
    constructor(typeDefinitionsGenerator, queryTypeFactory, mutationTypeFactory, orphanedTypesFactory) {
        this.typeDefinitionsGenerator = typeDefinitionsGenerator;
        this.queryTypeFactory = queryTypeFactory;
        this.mutationTypeFactory = mutationTypeFactory;
        this.orphanedTypesFactory = orphanedTypesFactory;
        this.logger = new common_1.Logger(WorkspaceGraphQLSchemaFactory_1.name);
    }
    async create(objectMetadataCollection, workspaceResolverBuilderMethods, options = {}) {
        this.typeDefinitionsGenerator.generate(objectMetadataCollection, options);
        const schema = new graphql_1.GraphQLSchema({
            query: this.queryTypeFactory.create(objectMetadataCollection, [...workspaceResolverBuilderMethods.queries], options),
            mutation: this.mutationTypeFactory.create(objectMetadataCollection, [...workspaceResolverBuilderMethods.mutations], options),
            types: this.orphanedTypesFactory.create(),
        });
        return schema;
    }
};
exports.WorkspaceGraphQLSchemaFactory = WorkspaceGraphQLSchemaFactory;
exports.WorkspaceGraphQLSchemaFactory = WorkspaceGraphQLSchemaFactory = WorkspaceGraphQLSchemaFactory_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [type_definitions_generator_1.TypeDefinitionsGenerator,
        query_type_factory_1.QueryTypeFactory,
        mutation_type_factory_1.MutationTypeFactory,
        orphaned_types_factory_1.OrphanedTypesFactory])
], WorkspaceGraphQLSchemaFactory);
//# sourceMappingURL=workspace-graphql-schema.factory.js.map