"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceManagerModule = void 0;
const common_1 = require("@nestjs/common");
const data_source_module_1 = require("../../metadata/data-source/data-source.module");
const object_metadata_module_1 = require("../../metadata/object-metadata/object-metadata.module");
const workspace_migration_module_1 = require("../../metadata/workspace-migration/workspace-migration.module");
const workspace_datasource_module_1 = require("../workspace-datasource/workspace-datasource.module");
const workspace_sync_metadata_module_1 = require("../workspace-sync-metadata/workspace-sync-metadata.module");
const workspace_manager_service_1 = require("./workspace-manager.service");
let WorkspaceManagerModule = class WorkspaceManagerModule {
};
exports.WorkspaceManagerModule = WorkspaceManagerModule;
exports.WorkspaceManagerModule = WorkspaceManagerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            workspace_datasource_module_1.WorkspaceDataSourceModule,
            workspace_migration_module_1.WorkspaceMigrationModule,
            object_metadata_module_1.ObjectMetadataModule,
            data_source_module_1.DataSourceModule,
            workspace_sync_metadata_module_1.WorkspaceSyncMetadataModule,
        ],
        exports: [workspace_manager_service_1.WorkspaceManagerService],
        providers: [workspace_manager_service_1.WorkspaceManagerService],
    })
], WorkspaceManagerModule);
//# sourceMappingURL=workspace-manager.module.js.map