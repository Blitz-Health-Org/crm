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
exports.GoogleGmailAuthController = void 0;
const common_1 = require("@nestjs/common");
const google_gmail_provider_enabled_guard_1 = require("../guards/google-gmail-provider-enabled.guard");
const google_gmail_oauth_guard_1 = require("../guards/google-gmail-oauth.guard");
const google_gmail_service_1 = require("../services/google-gmail.service");
const token_service_1 = require("../services/token.service");
let GoogleGmailAuthController = class GoogleGmailAuthController {
    constructor(googleGmailService, tokenService) {
        this.googleGmailService = googleGmailService;
        this.tokenService = tokenService;
    }
    async googleAuth() {
        return;
    }
    async googleAuthGetAccessToken(req, res) {
        const { user } = req;
        const { email, accessToken, refreshToken, transientToken } = user;
        const { workspaceMemberId, workspaceId } = await this.tokenService.verifyTransientToken(transientToken);
        await this.googleGmailService.saveConnectedAccount({
            handle: email,
            workspaceMemberId: workspaceMemberId,
            workspaceId: workspaceId,
            provider: 'gmail',
            accessToken,
            refreshToken,
        });
        return res.redirect('http://localhost:3001/settings/accounts');
    }
};
exports.GoogleGmailAuthController = GoogleGmailAuthController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(google_gmail_provider_enabled_guard_1.GoogleGmailProviderEnabledGuard, google_gmail_oauth_guard_1.GoogleGmailOauthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GoogleGmailAuthController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Get)('get-access-token'),
    (0, common_1.UseGuards)(google_gmail_provider_enabled_guard_1.GoogleGmailProviderEnabledGuard, google_gmail_oauth_guard_1.GoogleGmailOauthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GoogleGmailAuthController.prototype, "googleAuthGetAccessToken", null);
exports.GoogleGmailAuthController = GoogleGmailAuthController = __decorate([
    (0, common_1.Controller)('auth/google-gmail'),
    __metadata("design:paramtypes", [google_gmail_service_1.GoogleGmailService,
        token_service_1.TokenService])
], GoogleGmailAuthController);
//# sourceMappingURL=google-gmail-auth.controller.js.map