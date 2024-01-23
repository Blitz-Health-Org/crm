"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceSyncMetadataCommandsModule = void 0;
const common_1 = require("@nestjs/common");
const data_source_module_1 = require("../../../metadata/data-source/data-source.module");
const workspace_sync_metadata_module_1 = require("../workspace-sync-metadata.module");
const sync_workspace_metadata_command_1 = require("./sync-workspace-metadata.command");
let WorkspaceSyncMetadataCommandsModule = class WorkspaceSyncMetadataCommandsModule {
};
exports.WorkspaceSyncMetadataCommandsModule = WorkspaceSyncMetadataCommandsModule;
exports.WorkspaceSyncMetadataCommandsModule = WorkspaceSyncMetadataCommandsModule = __decorate([
    (0, common_1.Module)({
        imports: [workspace_sync_metadata_module_1.WorkspaceSyncMetadataModule, data_source_module_1.DataSourceModule],
        providers: [sync_workspace_metadata_command_1.SyncWorkspaceMetadataCommand],
    })
], WorkspaceSyncMetadataCommandsModule);
//# sourceMappingURL=workspace-sync-metadata-commands.module.js.map