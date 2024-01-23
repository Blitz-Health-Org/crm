import { ActivityObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/activity.object-metadata';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { WorkspaceMemberObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/workspace-member.object-metadata';
export declare class CommentObjectMetadata extends BaseObjectMetadata {
    body: string;
    author: WorkspaceMemberObjectMetadata;
    activity: ActivityObjectMetadata;
}
