"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const axios_1 = require("@nestjs/axios");
const environment_service_1 = require("../../integrations/environment/environment.service");
const file_module_1 = require("../file/file.module");
const workspace_entity_1 = require("../workspace/workspace.entity");
const user_entity_1 = require("../user/user.entity");
const refresh_token_entity_1 = require("../refresh-token/refresh-token.entity");
const data_source_module_1 = require("../../metadata/data-source/data-source.module");
const user_module_1 = require("../user/user.module");
const workspace_manager_module_1 = require("../../workspace/workspace-manager/workspace-manager.module");
const typeorm_module_1 = require("../../database/typeorm/typeorm.module");
const google_auth_controller_1 = require("./controllers/google-auth.controller");
const google_gmail_auth_controller_1 = require("./controllers/google-gmail-auth.controller");
const verify_auth_controller_1 = require("./controllers/verify-auth.controller");
const token_service_1 = require("./services/token.service");
const google_gmail_service_1 = require("./services/google-gmail.service");
const auth_resolver_1 = require("./auth.resolver");
const jwt_auth_strategy_1 = require("./strategies/jwt.auth.strategy");
const auth_service_1 = require("./services/auth.service");
const jwtModule = jwt_1.JwtModule.registerAsync({
    useFactory: async (environmentService) => {
        return {
            secret: environmentService.getAccessTokenSecret(),
            signOptions: {
                expiresIn: environmentService.getAccessTokenExpiresIn(),
            },
        };
    },
    inject: [environment_service_1.EnvironmentService],
});
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwtModule,
            file_module_1.FileModule,
            data_source_module_1.DataSourceModule,
            user_module_1.UserModule,
            workspace_manager_module_1.WorkspaceManagerModule,
            typeorm_module_1.TypeORMModule,
            typeorm_1.TypeOrmModule.forFeature([workspace_entity_1.Workspace, user_entity_1.User, refresh_token_entity_1.RefreshToken], 'core'),
            axios_1.HttpModule,
        ],
        controllers: [
            google_auth_controller_1.GoogleAuthController,
            google_gmail_auth_controller_1.GoogleGmailAuthController,
            verify_auth_controller_1.VerifyAuthController,
        ],
        providers: [
            auth_service_1.AuthService,
            token_service_1.TokenService,
            jwt_auth_strategy_1.JwtAuthStrategy,
            auth_resolver_1.AuthResolver,
            google_gmail_service_1.GoogleGmailService,
        ],
        exports: [jwtModule, token_service_1.TokenService],
    })
], AuthModule);
//# sourceMappingURL=auth.module.js.map