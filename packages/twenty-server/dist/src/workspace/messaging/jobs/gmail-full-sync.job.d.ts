import { MessageQueueJob } from 'src/integrations/message-queue/interfaces/message-queue-job.interface';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { GmailRefreshAccessTokenService } from 'src/workspace/messaging/services/gmail-refresh-access-token.service';
import { GmailFullSyncService } from 'src/workspace/messaging/services/gmail-full-sync.service';
export type GmailFullSyncJobData = {
    workspaceId: string;
    connectedAccountId: string;
};
export declare class GmailFullSyncJob implements MessageQueueJob<GmailFullSyncJobData> {
    private readonly environmentService;
    private readonly gmailRefreshAccessTokenService;
    private readonly fetchWorkspaceMessagesService;
    constructor(environmentService: EnvironmentService, gmailRefreshAccessTokenService: GmailRefreshAccessTokenService, fetchWorkspaceMessagesService: GmailFullSyncService);
    handle(data: GmailFullSyncJobData): Promise<void>;
}
