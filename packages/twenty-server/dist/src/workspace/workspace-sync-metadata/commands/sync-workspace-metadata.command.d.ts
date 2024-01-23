import { CommandRunner } from 'nest-commander';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import { WorkspaceSyncMetadataService } from 'src/workspace/workspace-sync-metadata/workspace-sync.metadata.service';
interface RunWorkspaceMigrationsOptions {
    workspaceId: string;
}
export declare class SyncWorkspaceMetadataCommand extends CommandRunner {
    private readonly workspaceSyncMetadataService;
    private readonly dataSourceService;
    constructor(workspaceSyncMetadataService: WorkspaceSyncMetadataService, dataSourceService: DataSourceService);
    run(_passedParam: string[], options: RunWorkspaceMigrationsOptions): Promise<void>;
    parseWorkspaceId(value: string): string;
}
export {};
