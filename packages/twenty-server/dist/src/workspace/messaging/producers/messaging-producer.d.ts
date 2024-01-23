import { MessageQueueService } from 'src/integrations/message-queue/services/message-queue.service';
import { GmailFullSyncJobData } from 'src/workspace/messaging/jobs/gmail-full-sync.job';
import { GmailPartialSyncJobData } from 'src/workspace/messaging/jobs/gmail-partial-sync.job';
export declare class MessagingProducer {
    private readonly messageQueueService;
    constructor(messageQueueService: MessageQueueService);
    enqueueGmailFullSync(data: GmailFullSyncJobData, singletonKey: string): Promise<void>;
    enqueueGmailPartialSync(data: GmailPartialSyncJobData, singletonKey: string): Promise<void>;
}
