import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { MessageChannelObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/message-channel.object-metadata';
import { WorkspaceMemberObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/workspace-member.object-metadata';
export declare class ConnectedAccountObjectMetadata extends BaseObjectMetadata {
    handle: string;
    provider: string;
    accessToken: string;
    refreshToken: string;
    accountOwner: WorkspaceMemberObjectMetadata;
    lastSyncHistoryId: string;
    messageChannels: MessageChannelObjectMetadata[];
}
