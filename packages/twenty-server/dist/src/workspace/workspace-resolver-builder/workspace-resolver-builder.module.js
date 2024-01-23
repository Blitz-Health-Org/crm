"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceResolverBuilderModule = void 0;
const common_1 = require("@nestjs/common");
const workspace_query_runner_module_1 = require("../workspace-query-runner/workspace-query-runner.module");
const quick_actions_module_1 = require("../../core/quick-actions/quick-actions.module");
const workspace_resolver_factory_1 = require("./workspace-resolver.factory");
const factories_1 = require("./factories/factories");
let WorkspaceResolverBuilderModule = class WorkspaceResolverBuilderModule {
};
exports.WorkspaceResolverBuilderModule = WorkspaceResolverBuilderModule;
exports.WorkspaceResolverBuilderModule = WorkspaceResolverBuilderModule = __decorate([
    (0, common_1.Module)({
        imports: [workspace_query_runner_module_1.WorkspaceQueryRunnerModule, quick_actions_module_1.QuickActionsModule],
        providers: [...factories_1.workspaceResolverBuilderFactories, workspace_resolver_factory_1.WorkspaceResolverFactory],
        exports: [workspace_resolver_factory_1.WorkspaceResolverFactory],
    })
], WorkspaceResolverBuilderModule);
//# sourceMappingURL=workspace-resolver-builder.module.js.map