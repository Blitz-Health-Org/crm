"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceSchemaBuilderModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
const object_metadata_module_1 = require("../../metadata/object-metadata/object-metadata.module");
const type_definitions_generator_1 = require("./type-definitions.generator");
const workspace_graphql_schema_factory_1 = require("./workspace-graphql-schema.factory");
const factories_1 = require("./factories/factories");
const type_definitions_storage_1 = require("./storages/type-definitions.storage");
const type_mapper_service_1 = require("./services/type-mapper.service");
let WorkspaceSchemaBuilderModule = class WorkspaceSchemaBuilderModule {
};
exports.WorkspaceSchemaBuilderModule = WorkspaceSchemaBuilderModule;
exports.WorkspaceSchemaBuilderModule = WorkspaceSchemaBuilderModule = __decorate([
    (0, common_1.Module)({
        imports: [object_metadata_module_1.ObjectMetadataModule],
        providers: [
            ...factories_1.workspaceSchemaBuilderFactories,
            type_definitions_generator_1.TypeDefinitionsGenerator,
            type_definitions_storage_1.TypeDefinitionsStorage,
            type_mapper_service_1.TypeMapperService,
            workspace_graphql_schema_factory_1.WorkspaceGraphQLSchemaFactory,
            jwt_auth_guard_1.JwtAuthGuard,
        ],
        exports: [workspace_graphql_schema_factory_1.WorkspaceGraphQLSchemaFactory],
    })
], WorkspaceSchemaBuilderModule);
//# sourceMappingURL=workspace-schema-builder.module.js.map