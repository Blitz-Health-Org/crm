import { CommandRunner } from 'nest-commander';
import { WorkspaceHealthMode } from 'src/workspace/workspace-health/interfaces/workspace-health-options.interface';
import { WorkspaceHealthService } from 'src/workspace/workspace-health/workspace-health.service';
interface WorkspaceHealthCommandOptions {
    workspaceId: string;
    verbose?: boolean;
    mode?: WorkspaceHealthMode;
}
export declare class WorkspaceHealthCommand extends CommandRunner {
    private readonly workspaceHealthService;
    constructor(workspaceHealthService: WorkspaceHealthService);
    run(_passedParam: string[], options: WorkspaceHealthCommandOptions): Promise<void>;
    parseWorkspaceId(value: string): string;
    parseVerbose(): boolean;
    parseMode(value: string): WorkspaceHealthMode;
}
export {};
