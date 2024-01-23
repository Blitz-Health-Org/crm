import { TypeOrmQueryService } from '@ptc-org/nestjs-query-typeorm';
import { Repository } from 'typeorm';
import { WorkspaceManagerService } from 'src/workspace/workspace-manager/workspace-manager.service';
import { Workspace } from 'src/core/workspace/workspace.entity';
export declare class WorkspaceService extends TypeOrmQueryService<Workspace> {
    private readonly workspaceRepository;
    private readonly workspaceManagerService;
    constructor(workspaceRepository: Repository<Workspace>, workspaceManagerService: WorkspaceManagerService);
    deleteWorkspace(id: string): Promise<Workspace>;
}
