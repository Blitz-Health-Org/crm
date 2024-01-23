import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CompanyObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/company.object-metadata';
import { OpportunityObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/opportunity.object-metadata';
import { PersonObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/person.object-metadata';
import { WorkspaceMemberObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/workspace-member.object-metadata';
export declare class FavoriteObjectMetadata extends BaseObjectMetadata {
    position: number;
    workspaceMember: WorkspaceMemberObjectMetadata;
    person: PersonObjectMetadata;
    company: CompanyObjectMetadata;
    opportunity: OpportunityObjectMetadata;
}
