"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_query_graphql_1 = require("@ptc-org/nestjs-query-graphql");
const nestjs_query_typeorm_1 = require("@ptc-org/nestjs-query-typeorm");
const file_module_1 = require("../file/file.module");
const workspace_manager_module_1 = require("../../workspace/workspace-manager/workspace-manager.module");
const workspace_resolver_1 = require("./workspace.resolver");
const typeorm_module_1 = require("../../database/typeorm/typeorm.module");
const feature_flag_entity_1 = require("../feature-flag/feature-flag.entity");
const workspace_entity_1 = require("./workspace.entity");
const workspace_auto_resolver_opts_1 = require("./workspace.auto-resolver-opts");
const workspace_service_1 = require("./services/workspace.service");
let WorkspaceModule = class WorkspaceModule {
};
exports.WorkspaceModule = WorkspaceModule;
exports.WorkspaceModule = WorkspaceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_module_1.TypeORMModule,
            nestjs_query_graphql_1.NestjsQueryGraphQLModule.forFeature({
                imports: [
                    nestjs_query_typeorm_1.NestjsQueryTypeOrmModule.forFeature([workspace_entity_1.Workspace, feature_flag_entity_1.FeatureFlagEntity], 'core'),
                    workspace_manager_module_1.WorkspaceManagerModule,
                    file_module_1.FileModule,
                ],
                services: [workspace_service_1.WorkspaceService],
                resolvers: workspace_auto_resolver_opts_1.workspaceAutoResolverOpts,
            }),
        ],
        exports: [workspace_service_1.WorkspaceService],
        providers: [workspace_resolver_1.WorkspaceResolver, workspace_service_1.WorkspaceService],
    })
], WorkspaceModule);
//# sourceMappingURL=workspace.module.js.map