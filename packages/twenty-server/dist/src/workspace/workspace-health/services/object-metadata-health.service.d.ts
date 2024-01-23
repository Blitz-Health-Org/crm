import { WorkspaceHealthIssue } from 'src/workspace/workspace-health/interfaces/workspace-health-issue.interface';
import { WorkspaceHealthOptions } from 'src/workspace/workspace-health/interfaces/workspace-health-options.interface';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
export declare class ObjectMetadataHealthService {
    private readonly typeORMService;
    constructor(typeORMService: TypeORMService);
    healthCheck(schemaName: string, objectMetadata: ObjectMetadataEntity, options: WorkspaceHealthOptions): Promise<WorkspaceHealthIssue[]>;
    private structureObjectCheck;
    private metadataObjectCheck;
}
