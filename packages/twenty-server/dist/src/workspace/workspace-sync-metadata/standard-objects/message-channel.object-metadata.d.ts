import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { ConnectedAccountObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/connected-account.object-metadata';
import { MessageThreadObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/message-thread.object-metadata';
export declare class MessageChannelObjectMetadata extends BaseObjectMetadata {
    visibility: string;
    handle: string;
    connectedAccount: ConnectedAccountObjectMetadata;
    type: string;
    messageThreads: MessageThreadObjectMetadata[];
}
