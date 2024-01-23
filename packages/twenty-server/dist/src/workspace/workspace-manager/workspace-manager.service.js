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
exports.WorkspaceManagerService = void 0;
const common_1 = require("@nestjs/common");
const data_source_service_1 = require("../../metadata/data-source/data-source.service");
const object_metadata_service_1 = require("../../metadata/object-metadata/object-metadata.service");
const workspace_migration_service_1 = require("../../metadata/workspace-migration/workspace-migration.service");
const standard_objects_prefill_data_1 = require("./standard-objects-prefill-data/standard-objects-prefill-data");
const demo_objects_prefill_data_1 = require("./demo-objects-prefill-data/demo-objects-prefill-data");
const workspace_datasource_service_1 = require("../workspace-datasource/workspace-datasource.service");
const workspace_sync_metadata_service_1 = require("../workspace-sync-metadata/workspace-sync.metadata.service");
let WorkspaceManagerService = class WorkspaceManagerService {
    constructor(workspaceDataSourceService, workspaceMigrationService, objectMetadataService, dataSourceService, workspaceSyncMetadataService) {
        this.workspaceDataSourceService = workspaceDataSourceService;
        this.workspaceMigrationService = workspaceMigrationService;
        this.objectMetadataService = objectMetadataService;
        this.dataSourceService = dataSourceService;
        this.workspaceSyncMetadataService = workspaceSyncMetadataService;
    }
    async init(workspaceId) {
        const schemaName = await this.workspaceDataSourceService.createWorkspaceDBSchema(workspaceId);
        const dataSourceMetadata = await this.dataSourceService.createDataSourceMetadata(workspaceId, schemaName);
        await this.setWorkspaceMaxRow(workspaceId, schemaName);
        await this.workspaceSyncMetadataService.syncStandardObjectsAndFieldsMetadata(dataSourceMetadata.id, workspaceId);
        await this.prefillWorkspaceWithStandardObjects(dataSourceMetadata, workspaceId);
    }
    async initDemo(workspaceId) {
        const schemaName = await this.workspaceDataSourceService.createWorkspaceDBSchema(workspaceId);
        const dataSourceMetadata = await this.dataSourceService.createDataSourceMetadata(workspaceId, schemaName);
        await this.setWorkspaceMaxRow(workspaceId, schemaName);
        await this.workspaceSyncMetadataService.syncStandardObjectsAndFieldsMetadata(dataSourceMetadata.id, workspaceId);
        await this.prefillWorkspaceWithDemoObjects(dataSourceMetadata, workspaceId);
    }
    async setWorkspaceMaxRow(workspaceId, schemaName) {
        const workspaceDataSource = await this.workspaceDataSourceService.connectToWorkspaceDataSource(workspaceId);
        await workspaceDataSource.query(`comment on schema ${schemaName} is e'@graphql({"max_rows": 60})'`);
    }
    async prefillWorkspaceWithStandardObjects(dataSourceMetadata, workspaceId) {
        const workspaceDataSource = await this.workspaceDataSourceService.connectToWorkspaceDataSource(workspaceId);
        if (!workspaceDataSource) {
            throw new Error('Could not connect to workspace data source');
        }
        const createdObjectMetadata = await this.objectMetadataService.findManyWithinWorkspace(workspaceId);
        await (0, standard_objects_prefill_data_1.standardObjectsPrefillData)(workspaceDataSource, dataSourceMetadata.schema, createdObjectMetadata);
    }
    async prefillWorkspaceWithDemoObjects(dataSourceMetadata, workspaceId) {
        const workspaceDataSource = await this.workspaceDataSourceService.connectToWorkspaceDataSource(workspaceId);
        if (!workspaceDataSource) {
            throw new Error('Could not connect to workspace data source');
        }
        const createdObjectMetadata = await this.objectMetadataService.findManyWithinWorkspace(workspaceId);
        await (0, demo_objects_prefill_data_1.demoObjectsPrefillData)(workspaceDataSource, dataSourceMetadata.schema, createdObjectMetadata);
    }
    async delete(workspaceId) {
        await this.objectMetadataService.deleteObjectsMetadata(workspaceId);
        await this.workspaceMigrationService.delete(workspaceId);
        await this.dataSourceService.delete(workspaceId);
        await this.workspaceDataSourceService.deleteWorkspaceDBSchema(workspaceId);
    }
};
exports.WorkspaceManagerService = WorkspaceManagerService;
exports.WorkspaceManagerService = WorkspaceManagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [workspace_datasource_service_1.WorkspaceDataSourceService,
        workspace_migration_service_1.WorkspaceMigrationService,
        object_metadata_service_1.ObjectMetadataService,
        data_source_service_1.DataSourceService,
        workspace_sync_metadata_service_1.WorkspaceSyncMetadataService])
], WorkspaceManagerService);
//# sourceMappingURL=workspace-manager.service.js.map