"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetadataModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const nestjs_1 = require("@graphql-yoga/nestjs");
const workspace_migration_runner_module_1 = require("../workspace/workspace-migration-runner/workspace-migration-runner.module");
const workspace_migration_module_1 = require("./workspace-migration/workspace-migration.module");
const metadata_module_factory_1 = require("./metadata.module-factory");
const exception_handler_service_1 = require("../integrations/exception-handler/exception-handler.service");
const environment_service_1 = require("../integrations/environment/environment.service");
const data_source_module_1 = require("./data-source/data-source.module");
const field_metadata_module_1 = require("./field-metadata/field-metadata.module");
const object_metadata_module_1 = require("./object-metadata/object-metadata.module");
const relation_metadata_module_1 = require("./relation-metadata/relation-metadata.module");
let MetadataModule = class MetadataModule {
};
exports.MetadataModule = MetadataModule;
exports.MetadataModule = MetadataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRootAsync({
                driver: nestjs_1.YogaDriver,
                useFactory: metadata_module_factory_1.metadataModuleFactory,
                inject: [environment_service_1.EnvironmentService, exception_handler_service_1.ExceptionHandlerService],
            }),
            data_source_module_1.DataSourceModule,
            field_metadata_module_1.FieldMetadataModule,
            object_metadata_module_1.ObjectMetadataModule,
            workspace_migration_runner_module_1.WorkspaceMigrationRunnerModule,
            workspace_migration_module_1.WorkspaceMigrationModule,
            relation_metadata_module_1.RelationMetadataModule,
        ],
    })
], MetadataModule);
//# sourceMappingURL=metadata.module.js.map