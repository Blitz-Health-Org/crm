"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFeatureFlags = exports.seedFeatureFlags = void 0;
const feature_flag_entity_1 = require("../../../core/feature-flag/feature-flag.entity");
const tableName = 'featureFlag';
const seedFeatureFlags = async (workspaceDataSource, schemaName, workspaceId) => {
    await workspaceDataSource
        .createQueryBuilder()
        .insert()
        .into(`${schemaName}.${tableName}`, ['key', 'workspaceId', 'value'])
        .orIgnore()
        .values([
        {
            key: feature_flag_entity_1.FeatureFlagKeys.IsRelationFieldTypeEnabled,
            workspaceId: workspaceId,
            value: true,
        },
        {
            key: feature_flag_entity_1.FeatureFlagKeys.IsMessagingEnabled,
            workspaceId: workspaceId,
            value: true,
        },
        {
            key: feature_flag_entity_1.FeatureFlagKeys.IsSelectFieldTypeEnabled,
            workspaceId: workspaceId,
            value: true,
        },
        {
            key: feature_flag_entity_1.FeatureFlagKeys.IsRatingFieldTypeEnabled,
            workspaceId: workspaceId,
            value: true,
        },
        {
            key: feature_flag_entity_1.FeatureFlagKeys.IsWorkspaceCleanable,
            workspaceId: workspaceId,
            value: true,
        },
        {
            key: 'IS_RELATION_FIELD_CARD_ENABLED',
            workspaceId: workspaceId,
            value: true,
        },
    ])
        .execute();
};
exports.seedFeatureFlags = seedFeatureFlags;
const deleteFeatureFlags = async (workspaceDataSource, schemaName, workspaceId) => {
    await workspaceDataSource
        .createQueryBuilder()
        .delete()
        .from(`${schemaName}.${tableName}`)
        .where(`"${tableName}"."workspaceId" = :workspaceId`, { workspaceId })
        .execute();
};
exports.deleteFeatureFlags = deleteFeatureFlags;
//# sourceMappingURL=feature-flags.js.map