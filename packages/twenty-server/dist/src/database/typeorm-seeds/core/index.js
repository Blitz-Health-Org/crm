"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCoreSchema = exports.seedCoreSchema = void 0;
const users_1 = require("./users");
const workspaces_1 = require("./workspaces");
const feature_flags_1 = require("./feature-flags");
const seedCoreSchema = async (workspaceDataSource, workspaceId) => {
    const schemaName = 'core';
    await (0, workspaces_1.seedWorkspaces)(workspaceDataSource, schemaName, workspaceId);
    await (0, users_1.seedUsers)(workspaceDataSource, schemaName, workspaceId);
    await (0, feature_flags_1.seedFeatureFlags)(workspaceDataSource, schemaName, workspaceId);
};
exports.seedCoreSchema = seedCoreSchema;
const deleteCoreSchema = async (workspaceDataSource, workspaceId) => {
    const schemaName = 'core';
    await (0, users_1.deleteUsersByWorkspace)(workspaceDataSource, schemaName, workspaceId);
    await (0, feature_flags_1.deleteFeatureFlags)(workspaceDataSource, schemaName, workspaceId);
    await (0, workspaces_1.deleteWorkspaces)(workspaceDataSource, schemaName, workspaceId);
};
exports.deleteCoreSchema = deleteCoreSchema;
//# sourceMappingURL=index.js.map