import { FullNameMetadata } from 'src/metadata/field-metadata/composite-types/full-name.composite-type';
import { LinkMetadata } from 'src/metadata/field-metadata/composite-types/link.composite-type';
import { ActivityTargetObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/activity-target.object-metadata';
import { AttachmentObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/attachment.object-metadata';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CompanyObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/company.object-metadata';
import { FavoriteObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/favorite.object-metadata';
import { MessageParticipantObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/message-participant.object-metadata';
import { OpportunityObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/opportunity.object-metadata';
export declare class PersonObjectMetadata extends BaseObjectMetadata {
    name: FullNameMetadata;
    email: string;
    linkedinLink: LinkMetadata;
    xLink: LinkMetadata;
    jobTitle: string;
    phone: string;
    city: string;
    avatarUrl: string;
    company: CompanyObjectMetadata;
    pointOfContactForOpportunities: OpportunityObjectMetadata[];
    activityTargets: ActivityTargetObjectMetadata[];
    favorites: FavoriteObjectMetadata[];
    attachments: AttachmentObjectMetadata[];
    messageParticipants: MessageParticipantObjectMetadata[];
}
