"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceAutoResolverOpts = void 0;
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
const update_workspace_input_1 = require("./dtos/update-workspace-input");
const workspace_entity_1 = require("./workspace.entity");
exports.workspaceAutoResolverOpts = [
    {
        EntityClass: workspace_entity_1.Workspace,
        DTOClass: workspace_entity_1.Workspace,
        UpdateDTOClass: update_workspace_input_1.UpdateWorkspaceInput,
        enableTotalCount: true,
        pagingStrategy: nestjs_query_graphql_1.PagingStrategies.CURSOR,
        read: {
            many: { disabled: true },
            one: { disabled: true },
        },
        create: {
            many: { disabled: true },
            one: { disabled: true },
        },
        update: {
            one: { disabled: true },
            many: { disabled: true },
        },
        delete: { many: { disabled: true }, one: { disabled: true } },
        guards: [jwt_auth_guard_1.JwtAuthGuard],
    },
];
//# sourceMappingURL=workspace.auto-resolver-opts.js.map