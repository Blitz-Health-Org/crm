"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseCommandModule = void 0;
const common_1 = require("@nestjs/common");
const confirmation_question_1 = require("./questions/confirmation.question");
const workspace_manager_module_1 = require("../../workspace/workspace-manager/workspace-manager.module");
const data_source_module_1 = require("../../metadata/data-source/data-source.module");
const typeorm_module_1 = require("../typeorm/typeorm.module");
const workspace_module_1 = require("../../core/workspace/workspace.module");
const data_seed_dev_workspace_command_1 = require("./data-seed-dev-workspace.command");
const data_seed_demo_workspace_command_1 = require("./data-seed-demo-workspace.command");
const workspace_datasource_module_1 = require("../../workspace/workspace-datasource/workspace-datasource.module");
const workspace_sync_metadata_module_1 = require("../../workspace/workspace-sync-metadata/workspace-sync-metadata.module");
const object_metadata_module_1 = require("../../metadata/object-metadata/object-metadata.module");
const workspace_add_total_count_command_1 = require("./workspace-add-total-count.command");
let DatabaseCommandModule = class DatabaseCommandModule {
};
exports.DatabaseCommandModule = DatabaseCommandModule;
exports.DatabaseCommandModule = DatabaseCommandModule = __decorate([
    (0, common_1.Module)({
        imports: [
            workspace_manager_module_1.WorkspaceManagerModule,
            data_source_module_1.DataSourceModule,
            typeorm_module_1.TypeORMModule,
            workspace_module_1.WorkspaceModule,
            workspace_datasource_module_1.WorkspaceDataSourceModule,
            workspace_sync_metadata_module_1.WorkspaceSyncMetadataModule,
            object_metadata_module_1.ObjectMetadataModule,
        ],
        providers: [
            data_seed_dev_workspace_command_1.DataSeedWorkspaceCommand,
            data_seed_demo_workspace_command_1.DataSeedDemoWorkspaceCommand,
            workspace_add_total_count_command_1.WorkspaceAddTotalCountCommand,
            confirmation_question_1.ConfirmationQuestion,
        ],
    })
], DatabaseCommandModule);
//# sourceMappingURL=database-command.module.js.map