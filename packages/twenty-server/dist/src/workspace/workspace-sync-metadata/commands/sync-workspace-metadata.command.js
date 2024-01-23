"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncWorkspaceMetadataCommand = void 0;
const nest_commander_1 = require("nest-commander");
const data_source_service_1 = require("../../../metadata/data-source/data-source.service");
const workspace_sync_metadata_service_1 = require("../workspace-sync.metadata.service");
let SyncWorkspaceMetadataCommand = class SyncWorkspaceMetadataCommand extends nest_commander_1.CommandRunner {
    constructor(workspaceSyncMetadataService, dataSourceService) {
        super();
        this.workspaceSyncMetadataService = workspaceSyncMetadataService;
        this.dataSourceService = dataSourceService;
    }
    async run(_passedParam, options) {
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(options.workspaceId);
        await this.workspaceSyncMetadataService.syncStandardObjectsAndFieldsMetadata(dataSourceMetadata.id, options.workspaceId);
    }
    parseWorkspaceId(value) {
        return value;
    }
};
exports.SyncWorkspaceMetadataCommand = SyncWorkspaceMetadataCommand;
__decorate([
    (0, nest_commander_1.Option)({
        flags: '-w, --workspace-id [workspace_id]',
        description: 'workspace id',
        required: true,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], SyncWorkspaceMetadataCommand.prototype, "parseWorkspaceId", null);
exports.SyncWorkspaceMetadataCommand = SyncWorkspaceMetadataCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'workspace:sync-metadata',
        description: 'Sync metadata',
    }),
    __metadata("design:paramtypes", [workspace_sync_metadata_service_1.WorkspaceSyncMetadataService,
        data_source_service_1.DataSourceService])
], SyncWorkspaceMetadataCommand);
//# sourceMappingURL=sync-workspace-metadata.command.js.map