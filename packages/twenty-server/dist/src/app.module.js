"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const config_1 = require("@nestjs/config");
const nestjs_1 = require("@graphql-yoga/nestjs");
const graphql_config_service_1 = require("./graphql-config.service");
const core_module_1 = require("./core/core.module");
const integrations_module_1 = require("./integrations/integrations.module");
const health_module_1 = require("./health/health.module");
const workspace_module_1 = require("./workspace/workspace.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            graphql_1.GraphQLModule.forRootAsync({
                driver: nestjs_1.YogaDriver,
                imports: [core_module_1.CoreModule],
                useClass: graphql_config_service_1.GraphQLConfigService,
            }),
            health_module_1.HealthModule,
            integrations_module_1.IntegrationsModule,
            core_module_1.CoreModule,
            workspace_module_1.WorkspaceModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map