import { Repository } from 'typeorm';
import { WorkspaceCacheVersionEntity } from 'src/metadata/workspace-cache-version/workspace-cache-version.entity';
export declare class WorkspaceCacheVersionService {
    private readonly workspaceCacheVersionRepository;
    constructor(workspaceCacheVersionRepository: Repository<WorkspaceCacheVersionEntity>);
    incrementVersion(workspaceId: string): Promise<void>;
    getVersion(workspaceId: string): Promise<string>;
}
