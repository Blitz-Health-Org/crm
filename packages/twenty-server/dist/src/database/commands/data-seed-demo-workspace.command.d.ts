import { CommandRunner } from 'nest-commander';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { WorkspaceManagerService } from 'src/workspace/workspace-manager/workspace-manager.service';
export declare class DataSeedDemoWorkspaceCommand extends CommandRunner {
    private readonly environmentService;
    private readonly workspaceManagerService;
    constructor(environmentService: EnvironmentService, workspaceManagerService: WorkspaceManagerService);
    run(): Promise<void>;
}
