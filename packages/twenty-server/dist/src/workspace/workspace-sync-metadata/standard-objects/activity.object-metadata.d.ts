import { ActivityTargetObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/activity-target.object-metadata';
import { AttachmentObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/attachment.object-metadata';
import { BaseObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/base.object-metadata';
import { CommentObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/comment.object-metadata';
import { WorkspaceMemberObjectMetadata } from 'src/workspace/workspace-sync-metadata/standard-objects/workspace-member.object-metadata';
export declare class ActivityObjectMetadata extends BaseObjectMetadata {
    title: string;
    body: string;
    type: string;
    reminderAt: Date;
    dueAt: Date;
    completedAt: Date;
    activityTargets: ActivityTargetObjectMetadata[];
    attachments: AttachmentObjectMetadata[];
    comments: CommentObjectMetadata[];
    author: WorkspaceMemberObjectMetadata;
    assignee: WorkspaceMemberObjectMetadata;
}
