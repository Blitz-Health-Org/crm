"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectMetadataModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const nestjs_query_typeorm_1 = require("@ptc-org/nestjs-query-typeorm");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const data_source_module_1 = require("../data-source/data-source.module");
const workspace_migration_runner_module_1 = require("../../workspace/workspace-migration-runner/workspace-migration-runner.module");
const workspace_migration_module_1 = require("../workspace-migration/workspace-migration.module");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
const typeorm_module_1 = require("../../database/typeorm/typeorm.module");
const field_metadata_entity_1 = require("../field-metadata/field-metadata.entity");
const relation_metadata_entity_1 = require("../relation-metadata/relation-metadata.entity");
const object_metadata_service_1 = require("./object-metadata.service");
const object_metadata_entity_1 = require("./object-metadata.entity");
const create_object_input_1 = require("./dtos/create-object.input");
const update_object_input_1 = require("./dtos/update-object.input");
const object_metadata_dto_1 = require("./dtos/object-metadata.dto");
let ObjectMetadataModule = class ObjectMetadataModule {
};
exports.ObjectMetadataModule = ObjectMetadataModule;
exports.ObjectMetadataModule = ObjectMetadataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [
                    typeorm_module_1.TypeORMModule,
                    nestjs_query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([object_metadata_entity_1.ObjectMetadataEntity, field_metadata_entity_1.FieldMetadataEntity, relation_metadata_entity_1.RelationMetadataEntity], 'metadata'),
                    data_source_module_1.DataSourceModule,
                    workspace_migration_module_1.WorkspaceMigrationModule,
                    workspace_migration_runner_module_1.WorkspaceMigrationRunnerModule,
                ],
                services: [object_metadata_service_1.ObjectMetadataService],
                resolvers: [
                    {
                        EntityClass: object_metadata_entity_1.ObjectMetadataEntity,
                        DTOClass: object_metadata_dto_1.ObjectMetadataDTO,
                        CreateDTOClass: create_object_input_1.CreateObjectInput,
                        UpdateDTOClass: update_object_input_1.UpdateObjectInput,
                        ServiceClass: object_metadata_service_1.ObjectMetadataService,
                        enableTotalCount: true,
                        pagingStrategy: nestjs_query_graphql_1.PagingStrategies.CURSOR,
                        read: {
                            defaultSort: [{ field: 'id', direction: nestjs_query_core_1.SortDirection.DESC }],
                        },
                        create: {
                            many: { disabled: true },
                        },
                        update: {
                            many: { disabled: true },
                        },
                        delete: { many: { disabled: true } },
                        guards: [jwt_auth_guard_1.JwtAuthGuard],
                    },
                ],
            }),
        ],
        providers: [object_metadata_service_1.ObjectMetadataService],
        exports: [object_metadata_service_1.ObjectMetadataService],
    })
], ObjectMetadataModule);
//# sourceMappingURL=object-metadata.module.js.map