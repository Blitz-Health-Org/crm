"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceSyncMetadataModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const feature_flag_entity_1 = require("../../core/feature-flag/feature-flag.entity");
const field_metadata_entity_1 = require("../../metadata/field-metadata/field-metadata.entity");
const object_metadata_entity_1 = require("../../metadata/object-metadata/object-metadata.entity");
const relation_metadata_entity_1 = require("../../metadata/relation-metadata/relation-metadata.entity");
const workspace_migration_entity_1 = require("../../metadata/workspace-migration/workspace-migration.entity");
const workspace_migration_module_1 = require("../../metadata/workspace-migration/workspace-migration.module");
const workspace_migration_runner_module_1 = require("../workspace-migration-runner/workspace-migration-runner.module");
const reflective_metadata_factory_1 = require("./reflective-metadata.factory");
const workspace_sync_metadata_service_1 = require("./workspace-sync.metadata.service");
let WorkspaceSyncMetadataModule = class WorkspaceSyncMetadataModule {
};
exports.WorkspaceSyncMetadataModule = WorkspaceSyncMetadataModule;
exports.WorkspaceSyncMetadataModule = WorkspaceSyncMetadataModule = __decorate([
    (0, common_1.Module)({
        imports: [
            workspace_migration_module_1.WorkspaceMigrationModule,
            workspace_migration_runner_module_1.WorkspaceMigrationRunnerModule,
            typeorm_1.TypeOrmModule.forFeature([
                field_metadata_entity_1.FieldMetadataEntity,
                object_metadata_entity_1.ObjectMetadataEntity,
                relation_metadata_entity_1.RelationMetadataEntity,
                workspace_migration_entity_1.WorkspaceMigrationEntity,
            ], 'metadata'),
            typeorm_1.TypeOrmModule.forFeature([feature_flag_entity_1.FeatureFlagEntity], 'core'),
        ],
        providers: [workspace_sync_metadata_service_1.WorkspaceSyncMetadataService, reflective_metadata_factory_1.ReflectiveMetadataFactory],
        exports: [workspace_sync_metadata_service_1.WorkspaceSyncMetadataService],
    })
], WorkspaceSyncMetadataModule);
//# sourceMappingURL=workspace-sync-metadata.module.js.map