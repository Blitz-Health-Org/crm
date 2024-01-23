import { FetchMessagesByBatchesService } from 'src/workspace/messaging/services/fetch-messages-by-batches.service';
import { GmailClientProvider } from 'src/workspace/messaging/providers/gmail/gmail-client.provider';
import { MessagingUtilsService } from 'src/workspace/messaging/services/messaging-utils.service';
import { MessageQueueService } from 'src/integrations/message-queue/services/message-queue.service';
export declare class GmailPartialSyncService {
    private readonly gmailClientProvider;
    private readonly fetchMessagesByBatchesService;
    private readonly utils;
    private readonly messageQueueService;
    constructor(gmailClientProvider: GmailClientProvider, fetchMessagesByBatchesService: FetchMessagesByBatchesService, utils: MessagingUtilsService, messageQueueService: MessageQueueService);
    private getHistory;
    fetchConnectedAccountThreads(workspaceId: string, connectedAccountId: string, maxResults?: number): Promise<void>;
    private getMessageIdsAndThreadIdsFromHistory;
}
