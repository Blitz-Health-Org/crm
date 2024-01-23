"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceQueryRunnerModule = void 0;
const common_1 = require("@nestjs/common");
const workspace_query_builder_module_1 = require("../workspace-query-builder/workspace-query-builder.module");
const workspace_datasource_module_1 = require("../workspace-datasource/workspace-datasource.module");
const workspace_query_runner_service_1 = require("./workspace-query-runner.service");
let WorkspaceQueryRunnerModule = class WorkspaceQueryRunnerModule {
};
exports.WorkspaceQueryRunnerModule = WorkspaceQueryRunnerModule;
exports.WorkspaceQueryRunnerModule = WorkspaceQueryRunnerModule = __decorate([
    (0, common_1.Module)({
        imports: [workspace_query_builder_module_1.WorkspaceQueryBuilderModule, workspace_datasource_module_1.WorkspaceDataSourceModule],
        providers: [workspace_query_runner_service_1.WorkspaceQueryRunnerService],
        exports: [workspace_query_runner_service_1.WorkspaceQueryRunnerService],
    })
], WorkspaceQueryRunnerModule);
//# sourceMappingURL=workspace-query-runner.module.js.map