"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const workspace_module_1 = require("./workspace/workspace.module");
const user_module_1 = require("./user/user.module");
const refresh_token_module_1 = require("./refresh-token/refresh-token.module");
const auth_module_1 = require("./auth/auth.module");
const api_rest_module_1 = require("./api-rest/api-rest.module");
const feature_flag_module_1 = require("./feature-flag/feature-flag.module");
const open_api_module_1 = require("./open-api/open-api.module");
const timeline_messaging_module_1 = require("./messaging/timeline-messaging.module");
const analytics_module_1 = require("./analytics/analytics.module");
const file_module_1 = require("./file/file.module");
const client_config_module_1 = require("./client-config/client-config.module");
let CoreModule = class CoreModule {
};
exports.CoreModule = CoreModule;
exports.CoreModule = CoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            workspace_module_1.WorkspaceModule,
            user_module_1.UserModule,
            refresh_token_module_1.RefreshTokenModule,
            analytics_module_1.AnalyticsModule,
            file_module_1.FileModule,
            client_config_module_1.ClientConfigModule,
            api_rest_module_1.ApiRestModule,
            open_api_module_1.OpenApiModule,
            feature_flag_module_1.FeatureFlagModule,
            timeline_messaging_module_1.TimelineMessagingModule,
        ],
        exports: [
            auth_module_1.AuthModule,
            workspace_module_1.WorkspaceModule,
            user_module_1.UserModule,
            analytics_module_1.AnalyticsModule,
            feature_flag_module_1.FeatureFlagModule,
            timeline_messaging_module_1.TimelineMessagingModule,
        ],
    })
], CoreModule);
//# sourceMappingURL=core.module.js.map