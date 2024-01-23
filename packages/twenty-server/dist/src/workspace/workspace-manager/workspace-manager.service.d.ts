import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
import { WorkspaceMigrationService } from 'src/metadata/workspace-migration/workspace-migration.service';
import { WorkspaceDataSourceService } from 'src/workspace/workspace-datasource/workspace-datasource.service';
import { WorkspaceSyncMetadataService } from 'src/workspace/workspace-sync-metadata/workspace-sync.metadata.service';
export declare class WorkspaceManagerService {
    private readonly workspaceDataSourceService;
    private readonly workspaceMigrationService;
    private readonly objectMetadataService;
    private readonly dataSourceService;
    private readonly workspaceSyncMetadataService;
    constructor(workspaceDataSourceService: WorkspaceDataSourceService, workspaceMigrationService: WorkspaceMigrationService, objectMetadataService: ObjectMetadataService, dataSourceService: DataSourceService, workspaceSyncMetadataService: WorkspaceSyncMetadataService);
    init(workspaceId: string): Promise<void>;
    initDemo(workspaceId: string): Promise<void>;
    private setWorkspaceMaxRow;
    private prefillWorkspaceWithStandardObjects;
    private prefillWorkspaceWithDemoObjects;
    delete(workspaceId: string): Promise<void>;
}
