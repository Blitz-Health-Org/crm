import { WorkspaceHealthIssue } from 'src/workspace/workspace-health/interfaces/workspace-health-issue.interface';
import { WorkspaceTableStructure } from 'src/workspace/workspace-health/interfaces/workspace-table-definition.interface';
import { WorkspaceHealthOptions } from 'src/workspace/workspace-health/interfaces/workspace-health-options.interface';
import { FieldMetadataEntity } from 'src/metadata/field-metadata/field-metadata.entity';
import { DatabaseStructureService } from 'src/workspace/workspace-health/services/database-structure.service';
export declare class FieldMetadataHealthService {
    private readonly databaseStructureService;
    constructor(databaseStructureService: DatabaseStructureService);
    healthCheck(tableName: string, workspaceTableColumns: WorkspaceTableStructure[], fieldMetadataCollection: FieldMetadataEntity[], options: WorkspaceHealthOptions): Promise<WorkspaceHealthIssue[]>;
    private healthCheckField;
    private structureFieldCheck;
    private metadataFieldCheck;
    private targetColumnMapCheck;
    private defaultValueHealthCheck;
    private isCompositeObjectWellStructured;
}
