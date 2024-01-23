import { WorkspaceMigrationService } from 'src/metadata/workspace-migration/workspace-migration.service';
import { WorkspaceDataSourceService } from 'src/workspace/workspace-datasource/workspace-datasource.service';
import { WorkspaceMigrationTableAction } from 'src/metadata/workspace-migration/workspace-migration.entity';
import { WorkspaceCacheVersionService } from 'src/metadata/workspace-cache-version/workspace-cache-version.service';
import { WorkspaceMigrationEnumService } from 'src/workspace/workspace-migration-runner/services/workspace-migration-enum.service';
export declare class WorkspaceMigrationRunnerService {
    private readonly workspaceDataSourceService;
    private readonly workspaceMigrationService;
    private readonly workspaceCacheVersionService;
    private readonly workspaceMigrationEnumService;
    constructor(workspaceDataSourceService: WorkspaceDataSourceService, workspaceMigrationService: WorkspaceMigrationService, workspaceCacheVersionService: WorkspaceCacheVersionService, workspaceMigrationEnumService: WorkspaceMigrationEnumService);
    executeMigrationFromPendingMigrations(workspaceId: string): Promise<WorkspaceMigrationTableAction[]>;
    private handleTableChanges;
    private createTable;
    private handleColumnChanges;
    private createColumn;
    private alterColumn;
    private createRelation;
}
