import { Workspace } from 'src/core/workspace/workspace.entity';
export declare enum FeatureFlagKeys {
    IsRelationFieldTypeEnabled = "IS_RELATION_FIELD_TYPE_ENABLED",
    IsMessagingEnabled = "IS_MESSAGING_ENABLED",
    IsSelectFieldTypeEnabled = "IS_SELECT_FIELD_TYPE_ENABLED",
    IsRatingFieldTypeEnabled = "IS_RATING_FIELD_TYPE_ENABLED",
    IsWorkspaceCleanable = "IS_WORKSPACE_CLEANABLE"
}
export declare class FeatureFlagEntity {
    id: string;
    key: FeatureFlagKeys;
    workspaceId: string;
    workspace: Workspace;
    value: boolean;
    createdAt: Date;
    updatedAt: Date;
}
