import { HttpService } from '@nestjs/axios';
import { MessageQueueJob } from 'src/integrations/message-queue/interfaces/message-queue-job.interface';
export type CallWebhookJobData = {
    targetUrl: string;
    eventType: string;
    objectMetadata: {
        id: string;
        nameSingular: string;
    };
    workspaceId: string;
    webhookId: string;
    eventDate: Date;
    record: any;
};
export declare class CallWebhookJob implements MessageQueueJob<CallWebhookJobData> {
    private readonly httpService;
    private readonly logger;
    constructor(httpService: HttpService);
    handle(data: CallWebhookJobData): Promise<void>;
}
