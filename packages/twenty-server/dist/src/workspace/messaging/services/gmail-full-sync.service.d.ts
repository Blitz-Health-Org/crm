import { FetchMessagesByBatchesService } from 'src/workspace/messaging/services/fetch-messages-by-batches.service';
import { GmailClientProvider } from 'src/workspace/messaging/providers/gmail/gmail-client.provider';
import { MessagingUtilsService } from 'src/workspace/messaging/services/messaging-utils.service';
export declare class GmailFullSyncService {
    private readonly gmailClientProvider;
    private readonly fetchMessagesByBatchesService;
    private readonly utils;
    constructor(gmailClientProvider: GmailClientProvider, fetchMessagesByBatchesService: FetchMessagesByBatchesService, utils: MessagingUtilsService);
    fetchConnectedAccountThreads(workspaceId: string, connectedAccountId: string, maxResults?: number): Promise<void>;
}
