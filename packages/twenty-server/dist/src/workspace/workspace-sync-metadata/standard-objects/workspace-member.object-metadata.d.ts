import { FullNameMetadata } from 'src/metadata/field-metadata/composite-types/full-name.composite-type';
import { ActivityObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/activity.object-metadata';
import { AttachmentObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/attachment.object-metadata';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CommentObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/comment.object-metadata';
import { CompanyObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/company.object-metadata';
import { ConnectedAccountObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/connected-account.object-metadata';
import { FavoriteObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/favorite.object-metadata';
import { MessageParticipantObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/message-participant.object-metadata';
export declare class WorkspaceMemberObjectMetadata extends BaseObjectMetadata {
    name: FullNameMetadata;
    colorScheme: string;
    locale: string;
    avatarUrl: string;
    userEmail: string;
    userId: string;
    authoredActivities: ActivityObjectMetadata[];
    assignedActivities: ActivityObjectMetadata[];
    favorites: FavoriteObjectMetadata[];
    accountOwnerForCompanies: CompanyObjectMetadata[];
    authoredAttachments: AttachmentObjectMetadata[];
    authoredComments: CommentObjectMetadata[];
    connectedAccounts: ConnectedAccountObjectMetadata[];
    messageParticipants: MessageParticipantObjectMetadata[];
}
