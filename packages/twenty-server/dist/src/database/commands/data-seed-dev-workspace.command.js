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
exports.DataSeedWorkspaceCommand = void 0;
const nest_commander_1 = require("nest-commander");
const typeorm_1 = require("typeorm");
const data_source_service_1 = require("../../metadata/data-source/data-source.service");
const companies_1 = require("../typeorm-seeds/workspace/companies");
const views_1 = require("../typeorm-seeds/workspace/views");
const typeorm_service_1 = require("../typeorm/typeorm.service");
const opportunity_1 = require("../typeorm-seeds/workspace/opportunity");
const pipeline_step_1 = require("../typeorm-seeds/workspace/pipeline-step");
const workspaceMember_1 = require("../typeorm-seeds/workspace/workspaceMember");
const people_1 = require("../typeorm-seeds/workspace/people");
const core_1 = require("../typeorm-seeds/core");
const environment_service_1 = require("../../integrations/environment/environment.service");
const workspace_sync_metadata_service_1 = require("../../workspace/workspace-sync-metadata/workspace-sync.metadata.service");
const workspace_datasource_service_1 = require("../../workspace/workspace-datasource/workspace-datasource.service");
const object_metadata_service_1 = require("../../metadata/object-metadata/object-metadata.service");
let DataSeedWorkspaceCommand = class DataSeedWorkspaceCommand extends nest_commander_1.CommandRunner {
    constructor(environmentService, dataSourceService, typeORMService, workspaceSyncMetadataService, workspaceDataSourceService, objectMetadataService) {
        super();
        this.environmentService = environmentService;
        this.dataSourceService = dataSourceService;
        this.typeORMService = typeORMService;
        this.workspaceSyncMetadataService = workspaceSyncMetadataService;
        this.workspaceDataSourceService = workspaceDataSourceService;
        this.objectMetadataService = objectMetadataService;
        this.workspaceId = '20202020-1c25-4d02-bf25-6aeccf7ea419';
    }
    async run() {
        try {
            const dataSource = new typeorm_1.DataSource({
                url: this.environmentService.getPGDatabaseUrl(),
                type: 'postgres',
                logging: true,
                schema: 'core',
            });
            await dataSource.initialize();
            await (0, core_1.seedCoreSchema)(dataSource, this.workspaceId);
            await dataSource.destroy();
            const schemaName = await this.workspaceDataSourceService.createWorkspaceDBSchema(this.workspaceId);
            const dataSourceMetadata = await this.dataSourceService.createDataSourceMetadata(this.workspaceId, schemaName);
            await this.workspaceSyncMetadataService.syncStandardObjectsAndFieldsMetadata(dataSourceMetadata.id, this.workspaceId);
        }
        catch (error) {
            console.error(error);
            return;
        }
        const dataSourceMetadata = await this.dataSourceService.getLastDataSourceMetadataFromWorkspaceIdOrFail(this.workspaceId);
        const workspaceDataSource = await this.typeORMService.connectToDataSource(dataSourceMetadata);
        if (!workspaceDataSource) {
            throw new Error('Could not connect to workspace data source');
        }
        try {
            const objectMetadata = await this.objectMetadataService.findManyWithinWorkspace(this.workspaceId);
            const objectMetadataMap = objectMetadata.reduce((acc, object) => {
                acc[object.nameSingular] = {
                    id: object.id,
                    fields: object.fields.reduce((acc, field) => {
                        acc[field.name] = field.id;
                        return acc;
                    }, {}),
                };
                return acc;
            }, {});
            await (0, companies_1.seedCompanies)(workspaceDataSource, dataSourceMetadata.schema);
            await (0, people_1.seedPeople)(workspaceDataSource, dataSourceMetadata.schema);
            await (0, pipeline_step_1.seedPipelineStep)(workspaceDataSource, dataSourceMetadata.schema);
            await (0, opportunity_1.seedOpportunity)(workspaceDataSource, dataSourceMetadata.schema);
            await (0, views_1.seedViews)(workspaceDataSource, dataSourceMetadata.schema, objectMetadataMap);
            await (0, workspaceMember_1.seedWorkspaceMember)(workspaceDataSource, dataSourceMetadata.schema);
        }
        catch (error) {
            console.error(error);
        }
        await this.typeORMService.disconnectFromDataSource(dataSourceMetadata.id);
    }
};
exports.DataSeedWorkspaceCommand = DataSeedWorkspaceCommand;
exports.DataSeedWorkspaceCommand = DataSeedWorkspaceCommand = __decorate([
    (0, nest_commander_1.Command)({
        name: 'workspace:seed:dev',
        description: 'Seed workspace with initial data. This command is intended for development only.',
    }),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService,
        data_source_service_1.DataSourceService,
        typeorm_service_1.TypeORMService,
        workspace_sync_metadata_service_1.WorkspaceSyncMetadataService,
        workspace_datasource_service_1.WorkspaceDataSourceService,
        object_metadata_service_1.ObjectMetadataService])
], DataSeedWorkspaceCommand);
//# sourceMappingURL=data-seed-dev-workspace.command.js.map