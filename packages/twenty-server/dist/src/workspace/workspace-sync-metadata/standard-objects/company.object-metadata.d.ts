import { CurrencyMetadata } from 'src/metadata/field-metadata/composite-types/currency.composite-type';
import { LinkMetadata } from 'src/metadata/field-metadata/composite-types/link.composite-type';
import { ActivityTargetObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/activity-target.object-metadata';
import { AttachmentObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/attachment.object-metadata';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { FavoriteObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/favorite.object-metadata';
import { OpportunityObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/opportunity.object-metadata';
import { PersonObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/person.object-metadata';
import { WorkspaceMemberObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/workspace-member.object-metadata';
export declare class CompanyObjectMetadata extends BaseObjectMetadata {
    name: string;
    domainName?: string;
    address: string;
    employees: number;
    linkedinLink: LinkMetadata;
    xLink: LinkMetadata;
    annualRecurringRevenue: CurrencyMetadata;
    idealCustomerProfile: boolean;
    people: PersonObjectMetadata[];
    accountOwner: WorkspaceMemberObjectMetadata;
    activityTargets: ActivityTargetObjectMetadata[];
    opportunities: OpportunityObjectMetadata[];
    favorites: FavoriteObjectMetadata[];
    attachments: AttachmentObjectMetadata[];
}
