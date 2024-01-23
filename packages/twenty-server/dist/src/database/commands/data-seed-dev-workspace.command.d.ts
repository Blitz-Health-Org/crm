import { CommandRunner } from 'nest-commander';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { WorkspaceSyncMetadataService } from 'src/workspace/workspace-sync-metadata/workspace-sync.metadata.service';
import { WorkspaceDataSourceService } from 'src/workspace/workspace-datasource/workspace-datasource.service';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
export declare class DataSeedWorkspaceCommand extends CommandRunner {
    private readonly environmentService;
    private readonly dataSourceService;
    private readonly typeORMService;
    private readonly workspaceSyncMetadataService;
    private readonly workspaceDataSourceService;
    private readonly objectMetadataService;
    workspaceId: string;
    constructor(environmentService: EnvironmentService, dataSourceService: DataSourceService, typeORMService: TypeORMService, workspaceSyncMetadataService: WorkspaceSyncMetadataService, workspaceDataSourceService: WorkspaceDataSourceService, objectMetadataService: ObjectMetadataService);
    run(): Promise<void>;
}
