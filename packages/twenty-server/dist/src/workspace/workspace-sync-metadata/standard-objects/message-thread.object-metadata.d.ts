import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { MessageChannelObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/message-channel.object-metadata';
import { MessageObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/message.object-metadata';
export declare class MessageThreadObjectMetadata extends BaseObjectMetadata {
    externalId: string;
    subject: string;
    messageChannel: MessageChannelObjectMetadata;
    visibility: string;
    messages: MessageObjectMetadata[];
}
