"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldMetadataModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const nestjs_query_typeorm_1 = require("@ptc-org/nestjs-query-typeorm");
const nestjs_query_core_1 = require("@ptc-org/nestjs-query-core");
const workspace_migration_runner_module_1 = require("../../workspace/workspace-migration-runner/workspace-migration-runner.module");
const workspace_migration_module_1 = require("../workspace-migration/workspace-migration.module");
const object_metadata_module_1 = require("../object-metadata/object-metadata.module");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
const data_source_module_1 = require("../data-source/data-source.module");
const typeorm_module_1 = require("../../database/typeorm/typeorm.module");
const is_field_metadata_default_value_validator_1 = require("./validators/is-field-metadata-default-value.validator");
const field_metadata_resolver_1 = require("./field-metadata.resolver");
const field_metadata_dto_1 = require("./dtos/field-metadata.dto");
const is_field_metadata_options_validator_1 = require("./validators/is-field-metadata-options.validator");
const field_metadata_service_1 = require("./field-metadata.service");
const field_metadata_entity_1 = require("./field-metadata.entity");
const create_field_input_1 = require("./dtos/create-field.input");
const update_field_input_1 = require("./dtos/update-field.input");
let FieldMetadataModule = class FieldMetadataModule {
};
exports.FieldMetadataModule = FieldMetadataModule;
exports.FieldMetadataModule = FieldMetadataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [
                    nestjs_query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([field_metadata_entity_1.FieldMetadataEntity], 'metadata'),
                    workspace_migration_module_1.WorkspaceMigrationModule,
                    workspace_migration_runner_module_1.WorkspaceMigrationRunnerModule,
                    object_metadata_module_1.ObjectMetadataModule,
                    data_source_module_1.DataSourceModule,
                    typeorm_module_1.TypeORMModule,
                ],
                services: [is_field_metadata_default_value_validator_1.IsFieldMetadataDefaultValue, field_metadata_service_1.FieldMetadataService],
                resolvers: [
                    {
                        EntityClass: field_metadata_entity_1.FieldMetadataEntity,
                        DTOClass: field_metadata_dto_1.FieldMetadataDTO,
                        CreateDTOClass: create_field_input_1.CreateFieldInput,
                        UpdateDTOClass: update_field_input_1.UpdateFieldInput,
                        ServiceClass: field_metadata_service_1.FieldMetadataService,
                        enableTotalCount: true,
                        pagingStrategy: nestjs_query_graphql_1.PagingStrategies.CURSOR,
                        read: {
                            defaultSort: [{ field: 'id', direction: nestjs_query_core_1.SortDirection.DESC }],
                        },
                        create: {
                            one: { disabled: true },
                            many: { disabled: true },
                        },
                        update: {
                            one: { disabled: true },
                            many: { disabled: true },
                        },
                        delete: { many: { disabled: true } },
                        guards: [jwt_auth_guard_1.JwtAuthGuard],
                    },
                ],
            }),
        ],
        providers: [
            is_field_metadata_default_value_validator_1.IsFieldMetadataDefaultValue,
            is_field_metadata_options_validator_1.IsFieldMetadataOptions,
            field_metadata_service_1.FieldMetadataService,
            field_metadata_resolver_1.FieldMetadataResolver,
        ],
        exports: [field_metadata_service_1.FieldMetadataService],
    })
], FieldMetadataModule);
//# sourceMappingURL=field-metadata.module.js.map