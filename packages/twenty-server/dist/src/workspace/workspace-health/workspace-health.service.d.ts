import { WorkspaceHealthIssue } from 'src/workspace/workspace-health/interfaces/workspace-health-issue.interface';
import { WorkspaceHealthOptions } from 'src/workspace/workspace-health/interfaces/workspace-health-options.interface';
import { TypeORMService } from 'src/database/typeorm/typeorm.service';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
import { WorkspaceDataSourceService } from 'src/workspace/workspace-datasource/workspace-datasource.service';
import { ObjectMetadataHealthService } from 'src/workspace/workspace-health/services/object-metadata-health.service';
import { FieldMetadataHealthService } from 'src/workspace/workspace-health/services/field-metadata-health.service';
import { RelationMetadataHealthService } from 'src/workspace/workspace-health/services/relation-metadata.health.service';
import { DatabaseStructureService } from 'src/workspace/workspace-health/services/database-structure.service';
export declare class WorkspaceHealthService {
    private readonly dataSourceService;
    private readonly typeORMService;
    private readonly objectMetadataService;
    private readonly databaseStructureService;
    private readonly workspaceDataSourceService;
    private readonly objectMetadataHealthService;
    private readonly fieldMetadataHealthService;
    private readonly relationMetadataHealthService;
    constructor(dataSourceService: DataSourceService, typeORMService: TypeORMService, objectMetadataService: ObjectMetadataService, databaseStructureService: DatabaseStructureService, workspaceDataSourceService: WorkspaceDataSourceService, objectMetadataHealthService: ObjectMetadataHealthService, fieldMetadataHealthService: FieldMetadataHealthService, relationMetadataHealthService: RelationMetadataHealthService);
    healthCheck(workspaceId: string, options?: WorkspaceHealthOptions): Promise<WorkspaceHealthIssue[]>;
}
