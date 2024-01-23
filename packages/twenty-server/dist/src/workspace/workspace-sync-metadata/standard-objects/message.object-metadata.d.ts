import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { MessageParticipantObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/message-participant.object-metadata';
import { MessageThreadObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/message-thread.object-metadata';
export declare class MessageObjectMetadata extends BaseObjectMetadata {
    externalId: string;
    headerMessageId: string;
    messageThread: MessageThreadObjectMetadata;
    direction: string;
    subject: string;
    body: string;
    receivedAt: string;
    messageParticipants: MessageParticipantObjectMetadata[];
}
