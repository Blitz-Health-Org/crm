import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { MessageObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/message.object-metadata';
import { PersonObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/person.object-metadata';
import { WorkspaceMemberObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/workspace-member.object-metadata';
export declare class MessageParticipantObjectMetadata extends BaseObjectMetadata {
    message: MessageObjectMetadata;
    role: string;
    handle: string;
    displayName: string;
    person: PersonObjectMetadata;
    workspaceMember: WorkspaceMemberObjectMetadata;
}
