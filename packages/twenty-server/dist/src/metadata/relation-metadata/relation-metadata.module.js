"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationMetadataModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const nestjs_query_typeorm_1 = require("@ptc-org/nestjs-query-typeorm");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
const field_metadata_module_1 = require("../field-metadata/field-metadata.module");
const object_metadata_module_1 = require("../object-metadata/object-metadata.module");
const workspace_migration_module_1 = require("../workspace-migration/workspace-migration.module");
const workspace_migration_runner_module_1 = require("../../workspace/workspace-migration-runner/workspace-migration-runner.module");
const relation_metadata_service_1 = require("./relation-metadata.service");
const relation_metadata_entity_1 = require("./relation-metadata.entity");
const create_relation_input_1 = require("./dtos/create-relation.input");
const relation_metadata_dto_1 = require("./dtos/relation-metadata.dto");
let RelationMetadataModule = class RelationMetadataModule {
};
exports.RelationMetadataModule = RelationMetadataModule;
exports.RelationMetadataModule = RelationMetadataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [
                    nestjs_query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([relation_metadata_entity_1.RelationMetadataEntity], 'metadata'),
                    object_metadata_module_1.ObjectMetadataModule,
                    field_metadata_module_1.FieldMetadataModule,
                    workspace_migration_runner_module_1.WorkspaceMigrationRunnerModule,
                    workspace_migration_module_1.WorkspaceMigrationModule,
                ],
                services: [relation_metadata_service_1.RelationMetadataService],
                resolvers: [
                    {
                        EntityClass: relation_metadata_entity_1.RelationMetadataEntity,
                        DTOClass: relation_metadata_dto_1.RelationMetadataDTO,
                        ServiceClass: relation_metadata_service_1.RelationMetadataService,
                        CreateDTOClass: create_relation_input_1.CreateRelationInput,
                        enableTotalCount: true,
                        pagingStrategy: nestjs_query_graphql_1.PagingStrategies.CURSOR,
                        create: { many: { disabled: true } },
                        update: { disabled: true },
                        delete: { many: { disabled: true } },
                        guards: [jwt_auth_guard_1.JwtAuthGuard],
                    },
                ],
            }),
        ],
        providers: [relation_metadata_service_1.RelationMetadataService],
        exports: [relation_metadata_service_1.RelationMetadataService],
    })
], RelationMetadataModule);
//# sourceMappingURL=relation-metadata.module.js.map