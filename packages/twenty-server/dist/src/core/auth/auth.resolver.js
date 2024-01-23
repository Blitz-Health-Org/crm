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
exports.AuthResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const jwt_auth_guard_1 = require("../../guards/jwt.auth.guard");
const auth_user_decorator_1 = require("../../decorators/auth-user.decorator");
const assert_1 = require("../../utils/assert");
const workspace_entity_1 = require("../workspace/workspace.entity");
const auth_workspace_decorator_1 = require("../../decorators/auth-workspace.decorator");
const user_entity_1 = require("../user/user.entity");
const api_key_token_input_1 = require("./dto/api-key-token.input");
const transient_token_entity_1 = require("./dto/transient-token.entity");
const user_service_1 = require("../user/services/user.service");
const token_entity_1 = require("./dto/token.entity");
const token_service_1 = require("./services/token.service");
const refresh_token_input_1 = require("./dto/refresh-token.input");
const verify_entity_1 = require("./dto/verify.entity");
const verify_input_1 = require("./dto/verify.input");
const auth_service_1 = require("./services/auth.service");
const login_token_entity_1 = require("./dto/login-token.entity");
const challenge_input_1 = require("./dto/challenge.input");
const user_exists_entity_1 = require("./dto/user-exists.entity");
const user_exists_input_1 = require("./dto/user-exists.input");
const workspace_invite_hash_valid_entity_1 = require("./dto/workspace-invite-hash-valid.entity");
const workspace_invite_hash_input_1 = require("./dto/workspace-invite-hash.input");
const sign_up_input_1 = require("./dto/sign-up.input");
const impersonate_input_1 = require("./dto/impersonate.input");
let AuthResolver = class AuthResolver {
    constructor(workspaceRepository, authService, tokenService, userService) {
        this.workspaceRepository = workspaceRepository;
        this.authService = authService;
        this.tokenService = tokenService;
        this.userService = userService;
    }
    async checkUserExists(checkUserExistsInput) {
        const { exists } = await this.authService.checkUserExists(checkUserExistsInput.email);
        return { exists };
    }
    async checkWorkspaceInviteHashIsValid(workspaceInviteHashValidInput) {
        return await this.authService.checkWorkspaceInviteHashIsValid(workspaceInviteHashValidInput.inviteHash);
    }
    async findWorkspaceFromInviteHash(workspaceInviteHashValidInput) {
        return await this.workspaceRepository.findOneBy({
            inviteHash: workspaceInviteHashValidInput.inviteHash,
        });
    }
    async challenge(challengeInput) {
        const user = await this.authService.challenge(challengeInput);
        const loginToken = await this.tokenService.generateLoginToken(user.email);
        return { loginToken };
    }
    async signUp(signUpInput) {
        const user = await this.authService.signUp(signUpInput);
        const loginToken = await this.tokenService.generateLoginToken(user.email);
        return { loginToken };
    }
    async generateTransientToken(user) {
        const workspaceMember = await this.userService.loadWorkspaceMember(user);
        const transientToken = await this.tokenService.generateTransientToken(workspaceMember.id, user.defaultWorkspace.id);
        return { transientToken };
    }
    async verify(verifyInput) {
        const email = await this.tokenService.verifyLoginToken(verifyInput.loginToken);
        const result = await this.authService.verify(email);
        return result;
    }
    async renewToken(args) {
        if (!args.refreshToken) {
            throw new common_1.BadRequestException('Refresh token is mendatory');
        }
        const tokens = await this.tokenService.generateTokensFromRefreshToken(args.refreshToken);
        return { tokens: tokens };
    }
    async impersonate(impersonateInput, user) {
        (0, assert_1.assert)(user.canImpersonate, 'User cannot impersonate', common_1.ForbiddenException);
        return this.authService.impersonate(impersonateInput.userId);
    }
    async generateApiKeyToken(args, { id: workspaceId }) {
        return await this.tokenService.generateApiKeyToken(workspaceId, args.apiKeyId, args.expiresAt);
    }
};
exports.AuthResolver = AuthResolver;
__decorate([
    (0, graphql_1.Query)(() => user_exists_entity_1.UserExists),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_exists_input_1.CheckUserExistsInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "checkUserExists", null);
__decorate([
    (0, graphql_1.Query)(() => workspace_invite_hash_valid_entity_1.WorkspaceInviteHashValid),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workspace_invite_hash_input_1.WorkspaceInviteHashValidInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "checkWorkspaceInviteHashIsValid", null);
__decorate([
    (0, graphql_1.Query)(() => workspace_entity_1.Workspace),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [workspace_invite_hash_input_1.WorkspaceInviteHashValidInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "findWorkspaceFromInviteHash", null);
__decorate([
    (0, graphql_1.Mutation)(() => login_token_entity_1.LoginToken),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [challenge_input_1.ChallengeInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "challenge", null);
__decorate([
    (0, graphql_1.Mutation)(() => login_token_entity_1.LoginToken),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sign_up_input_1.SignUpInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "signUp", null);
__decorate([
    (0, graphql_1.Mutation)(() => transient_token_entity_1.TransientToken),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "generateTransientToken", null);
__decorate([
    (0, graphql_1.Mutation)(() => verify_entity_1.Verify),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [verify_input_1.VerifyInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "verify", null);
__decorate([
    (0, graphql_1.Mutation)(() => token_entity_1.AuthTokens),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [refresh_token_input_1.RefreshTokenInput]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "renewToken", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => verify_entity_1.Verify),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_user_decorator_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [impersonate_input_1.ImpersonateInput,
        user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "impersonate", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, graphql_1.Mutation)(() => token_entity_1.ApiKeyToken),
    __param(0, (0, graphql_1.Args)()),
    __param(1, (0, auth_workspace_decorator_1.AuthWorkspace)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [api_key_token_input_1.ApiKeyTokenInput,
        workspace_entity_1.Workspace]),
    __metadata("design:returntype", Promise)
], AuthResolver.prototype, "generateApiKeyToken", null);
exports.AuthResolver = AuthResolver = __decorate([
    (0, graphql_1.Resolver)(),
    __param(0, (0, typeorm_1.InjectRepository)(workspace_entity_1.Workspace, 'core')),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        auth_service_1.AuthService,
        token_service_1.TokenService,
        user_service_1.UserService])
], AuthResolver);
//# sourceMappingURL=auth.resolver.js.map