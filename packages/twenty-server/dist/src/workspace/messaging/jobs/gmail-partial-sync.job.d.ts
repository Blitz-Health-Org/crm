import { MessageQueueJob } from 'src/integrations/message-queue/interfaces/message-queue-job.interface';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { GmailRefreshAccessTokenService } from 'src/workspace/messaging/services/gmail-refresh-access-token.service';
import { GmailPartialSyncService } from 'src/workspace/messaging/services/gmail-partial-sync.service';
export type GmailPartialSyncJobData = {
    workspaceId: string;
    connectedAccountId: string;
};
export declare class GmailPartialSyncJob implements MessageQueueJob<GmailPartialSyncJobData> {
    private readonly environmentService;
    private readonly gmailRefreshAccessTokenService;
    private readonly gmailPartialSyncService;
    constructor(environmentService: EnvironmentService, gmailRefreshAccessTokenService: GmailRefreshAccessTokenService, gmailPartialSyncService: GmailPartialSyncService);
    handle(data: GmailPartialSyncJobData): Promise<void>;
}
