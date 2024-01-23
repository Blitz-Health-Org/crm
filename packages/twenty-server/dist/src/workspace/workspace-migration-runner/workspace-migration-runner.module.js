"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceMigrationRunnerModule = void 0;
const common_1 = require("@nestjs/common");
const workspace_migration_module_1 = require("../../metadata/workspace-migration/workspace-migration.module");
const workspace_datasource_module_1 = require("../workspace-datasource/workspace-datasource.module");
const workspace_cache_version_module_1 = require("../../metadata/workspace-cache-version/workspace-cache-version.module");
const workspace_migration_enum_service_1 = require("./services/workspace-migration-enum.service");
const workspace_migration_runner_service_1 = require("./workspace-migration-runner.service");
let WorkspaceMigrationRunnerModule = class WorkspaceMigrationRunnerModule {
};
exports.WorkspaceMigrationRunnerModule = WorkspaceMigrationRunnerModule;
exports.WorkspaceMigrationRunnerModule = WorkspaceMigrationRunnerModule = __decorate([
    (0, common_1.Module)({
        imports: [
            workspace_datasource_module_1.WorkspaceDataSourceModule,
            workspace_migration_module_1.WorkspaceMigrationModule,
            workspace_cache_version_module_1.WorkspaceCacheVersionModule,
        ],
        providers: [workspace_migration_runner_service_1.WorkspaceMigrationRunnerService, workspace_migration_enum_service_1.WorkspaceMigrationEnumService],
        exports: [workspace_migration_runner_service_1.WorkspaceMigrationRunnerService],
    })
], WorkspaceMigrationRunnerModule);
//# sourceMappingURL=workspace-migration-runner.module.js.map