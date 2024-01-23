"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleAuthController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const token_service_1 = require("../services/token.service");
const google_provider_enabled_guard_1 = require("../guards/google-provider-enabled.guard");
const google_oauth_guard_1 = require("../guards/google-oauth.guard");
const user_entity_1 = require("../../user/user.entity");
const workspace_entity_1 = require("../../workspace/workspace.entity");
const auth_service_1 = require("../services/auth.service");
const typeorm_service_1 = require("../../../database/typeorm/typeorm.service");
const environment_service_1 = require("../../../integrations/environment/environment.service");
let GoogleAuthController = class GoogleAuthController {
    constructor(tokenService, environmentService, typeORMService, authService, userRepository) {
        this.tokenService = tokenService;
        this.environmentService = environmentService;
        this.typeORMService = typeORMService;
        this.authService = authService;
        this.userRepository = userRepository;
    }
    async googleAuth() {
        return;
    }
    async googleAuthRedirect(req, res) {
        const { firstName, lastName, email, picture, workspaceInviteHash } = req.user;
        const mainDataSource = this.typeORMService.getMainDataSource();
        const existingUser = await mainDataSource
            .getRepository(user_entity_1.User)
            .findOneBy({ email: email });
        if (existingUser) {
            const loginToken = await this.tokenService.generateLoginToken(existingUser.email);
            return res.redirect(this.tokenService.computeRedirectURI(loginToken.token));
        }
        const user = await this.authService.signUp({
            email,
            firstName,
            lastName,
            picture,
            workspaceInviteHash,
        });
        const loginToken = await this.tokenService.generateLoginToken(user.email);
        return res.redirect(this.tokenService.computeRedirectURI(loginToken.token));
    }
};
exports.GoogleAuthController = GoogleAuthController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(google_provider_enabled_guard_1.GoogleProviderEnabledGuard, google_oauth_guard_1.GoogleOauthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleAuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)('redirect'),
    (0, common_1.UseGuards)(google_provider_enabled_guard_1.GoogleProviderEnabledGuard, google_oauth_guard_1.GoogleOauthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GoogleAuthController.prototype, "googleAuthRedirect", null);
exports.GoogleAuthController = GoogleAuthController = __decorate([
    (0, common_1.Controller)('auth/google'),
    __param(4, (0, typeorm_1.InjectRepository)(workspace_entity_1.Workspace, 'core')),
    __param(4, (0, typeorm_1.InjectRepository)(user_entity_1.User, 'core')),
    __metadata("design:paramtypes", [token_service_1.TokenService,
        environment_service_1.EnvironmentService,
        typeorm_service_1.TypeORMService,
        auth_service_1.AuthService,
        typeorm_2.Repository])
], GoogleAuthController);
//# sourceMappingURL=google-auth.controller.js.map