"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuickActionsModule = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const intelligence_service_1 = require("./intelligence.service");
const quick_actions_service_1 = require("./quick-actions.service");
const workspace_query_runner_module_1 = require("../../workspace/workspace-query-runner/workspace-query-runner.module");
let QuickActionsModule = class QuickActionsModule {
};
exports.QuickActionsModule = QuickActionsModule;
exports.QuickActionsModule = QuickActionsModule = __decorate([
    (0, common_1.Module)({
        imports: [workspace_query_runner_module_1.WorkspaceQueryRunnerModule, axios_1.HttpModule],
        controllers: [],
        providers: [quick_actions_service_1.QuickActionsService, intelligence_service_1.IntelligenceService],
        exports: [quick_actions_service_1.QuickActionsService, intelligence_service_1.IntelligenceService],
    })
], QuickActionsModule);
//# sourceMappingURL=quick-actions.module.js.map