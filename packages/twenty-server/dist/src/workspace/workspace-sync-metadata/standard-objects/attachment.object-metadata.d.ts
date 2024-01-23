import { ActivityObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/activity.object-metadata';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CompanyObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/company.object-metadata';
import { PersonObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/person.object-metadata';
import { WorkspaceMemberObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/workspace-member.object-metadata';
export declare class AttachmentObjectMetadata extends BaseObjectMetadata {
    name: string;
    fullPath: string;
    type: string;
    author: WorkspaceMemberObjectMetadata;
    activity: ActivityObjectMetadata;
    person: PersonObjectMetadata;
    company: CompanyObjectMetadata;
}
