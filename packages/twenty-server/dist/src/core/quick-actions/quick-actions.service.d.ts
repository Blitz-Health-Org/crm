import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { WorkspaceQueryRunnerService } from 'src/workspace/workspace-query-runner/workspace-query-runner.service';
import { IntelligenceService } from 'src/core/quick-actions/intelligence.service';
export declare class QuickActionsService {
    private readonly workspaceQueryRunnunerService;
    private readonly intelligenceService;
    constructor(workspaceQueryRunnunerService: WorkspaceQueryRunnerService, intelligenceService: IntelligenceService);
    createCompanyFromPerson(id: string, workspaceId: string, objectMetadataItemCollection: ObjectMetadataInterface[]): Promise<void>;
    executeQuickActionOnCompany(id: string, workspaceId: string, objectMetadataItem: ObjectMetadataInterface): Promise<void>;
}
