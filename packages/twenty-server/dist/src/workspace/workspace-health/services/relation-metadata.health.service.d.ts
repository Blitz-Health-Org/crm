import { WorkspaceTableStructure } from 'src/workspace/workspace-health/interfaces/workspace-table-definition.interface';
import { WorkspaceHealthIssue } from 'src/workspace/workspace-health/interfaces/workspace-health-issue.interface';
import { WorkspaceHealthOptions } from 'src/workspace/workspace-health/interfaces/workspace-health-options.interface';
import { ObjectMetadataEntity } from 'src/metadata/object-metadata/object-metadata.entity';
export declare class RelationMetadataHealthService {
    constructor();
    healthCheck(workspaceTableColumns: WorkspaceTableStructure[], objectMetadataCollection: ObjectMetadataEntity[], objectMetadata: ObjectMetadataEntity, options: WorkspaceHealthOptions): WorkspaceHealthIssue[];
    private structureRelationCheck;
    private metadataRelationCheck;
}
