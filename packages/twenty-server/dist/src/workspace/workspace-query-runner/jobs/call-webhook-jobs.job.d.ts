import { MessageQueueJob } from 'src/integrations/message-queue/interfaces/message-queue-job.interface';
import { ObjectMetadataInterface } from 'src/metadata/field-metadata/interfaces/object-metadata.interface';
import { WorkspaceDataSourceService } from 'src/workspace/workspace-datasource/workspace-datasource.service';
import { ObjectMetadataService } from 'src/metadata/object-metadata/object-metadata.service';
import { DataSourceService } from 'src/metadata/data-source/data-source.service';
import { MessageQueueService } from 'src/integrations/message-queue/services/message-queue.service';
export declare enum CallWebhookJobsJobOperation {
    create = "create",
    update = "update",
    delete = "delete"
}
export type CallWebhookJobsJobData = {
    workspaceId: string;
    objectMetadataItem: ObjectMetadataInterface;
    record: any;
    operation: CallWebhookJobsJobOperation;
};
export declare class CallWebhookJobsJob implements MessageQueueJob<CallWebhookJobsJobData> {
    private readonly workspaceDataSourceService;
    private readonly objectMetadataService;
    private readonly dataSourceService;
    private readonly messageQueueService;
    private readonly logger;
    constructor(workspaceDataSourceService: WorkspaceDataSourceService, objectMetadataService: ObjectMetadataService, dataSourceService: DataSourceService, messageQueueService: MessageQueueService);
    handle(data: CallWebhookJobsJobData): Promise<void>;
}
