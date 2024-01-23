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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const date_fns_1 = require("date-fns");
const ms_1 = __importDefault(require("ms"));
const jsonwebtoken_1 = require("jsonwebtoken");
const typeorm_2 = require("typeorm");
const passport_jwt_1 = require("passport-jwt");
const jwt_auth_strategy_1 = require("../strategies/jwt.auth.strategy");
const assert_1 = require("../../../utils/assert");
const environment_service_1 = require("../../../integrations/environment/environment.service");
const user_entity_1 = require("../../user/user.entity");
const refresh_token_entity_1 = require("../../refresh-token/refresh-token.entity");
let TokenService = class TokenService {
    constructor(jwtService, jwtStrategy, environmentService, userRepository, refreshTokenRepository) {
        this.jwtService = jwtService;
        this.jwtStrategy = jwtStrategy;
        this.environmentService = environmentService;
        this.userRepository = userRepository;
        this.refreshTokenRepository = refreshTokenRepository;
    }
    async generateAccessToken(userId) {
        const expiresIn = this.environmentService.getAccessTokenExpiresIn();
        (0, assert_1.assert)(expiresIn, '', common_1.InternalServerErrorException);
        const expiresAt = (0, date_fns_1.addMilliseconds)(new Date().getTime(), (0, ms_1.default)(expiresIn));
        const user = await this.userRepository.findOne({
            where: { id: userId },
            relations: ['defaultWorkspace'],
        });
        if (!user) {
            throw new common_1.NotFoundException('User is not found');
        }
        if (!user.defaultWorkspace) {
            throw new common_1.NotFoundException('User does not have a default workspace');
        }
        const jwtPayload = {
            sub: user.id,
            workspaceId: user.defaultWorkspace.id,
        };
        return {
            token: this.jwtService.sign(jwtPayload),
            expiresAt,
        };
    }
    async generateRefreshToken(userId) {
        const secret = this.environmentService.getRefreshTokenSecret();
        const expiresIn = this.environmentService.getRefreshTokenExpiresIn();
        (0, assert_1.assert)(expiresIn, '', common_1.InternalServerErrorException);
        const expiresAt = (0, date_fns_1.addMilliseconds)(new Date().getTime(), (0, ms_1.default)(expiresIn));
        const refreshTokenPayload = {
            userId,
            expiresAt,
        };
        const jwtPayload = {
            sub: userId,
        };
        const refreshToken = this.refreshTokenRepository.create(refreshTokenPayload);
        await this.refreshTokenRepository.save(refreshToken);
        return {
            token: this.jwtService.sign(jwtPayload, {
                secret,
                expiresIn,
                jwtid: refreshToken.id,
            }),
            expiresAt,
        };
    }
    async generateLoginToken(email) {
        const secret = this.environmentService.getLoginTokenSecret();
        const expiresIn = this.environmentService.getLoginTokenExpiresIn();
        (0, assert_1.assert)(expiresIn, '', common_1.InternalServerErrorException);
        const expiresAt = (0, date_fns_1.addMilliseconds)(new Date().getTime(), (0, ms_1.default)(expiresIn));
        const jwtPayload = {
            sub: email,
        };
        return {
            token: this.jwtService.sign(jwtPayload, {
                secret,
                expiresIn,
            }),
            expiresAt,
        };
    }
    async generateTransientToken(workspaceMemberId, workspaceId) {
        const secret = this.environmentService.getLoginTokenSecret();
        const expiresIn = this.environmentService.getTransientTokenExpiresIn();
        (0, assert_1.assert)(expiresIn, '', common_1.InternalServerErrorException);
        const expiresAt = (0, date_fns_1.addMilliseconds)(new Date().getTime(), (0, ms_1.default)(expiresIn));
        const jwtPayload = {
            sub: workspaceMemberId,
            workspaceId,
        };
        return {
            token: this.jwtService.sign(jwtPayload, {
                secret,
                expiresIn,
            }),
            expiresAt,
        };
    }
    async generateApiKeyToken(workspaceId, apiKeyId, expiresAt) {
        if (!apiKeyId) {
            return;
        }
        const jwtPayload = {
            sub: workspaceId,
        };
        const secret = this.environmentService.getAccessTokenSecret();
        let expiresIn;
        if (expiresAt) {
            expiresIn = Math.floor((new Date(expiresAt).getTime() - new Date().getTime()) / 1000);
        }
        else {
            expiresIn = this.environmentService.getApiTokenExpiresIn();
        }
        const token = this.jwtService.sign(jwtPayload, {
            secret,
            expiresIn,
            jwtid: apiKeyId,
        });
        return { token };
    }
    async validateToken(request) {
        const token = passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken()(request);
        if (!token) {
            throw new common_1.UnauthorizedException('missing authentication token');
        }
        const decoded = await this.verifyJwt(token, this.environmentService.getAccessTokenSecret());
        const { workspace } = await this.jwtStrategy.validate(decoded);
        return workspace;
    }
    async verifyLoginToken(loginToken) {
        const loginTokenSecret = this.environmentService.getLoginTokenSecret();
        const payload = await this.verifyJwt(loginToken, loginTokenSecret);
        return payload.sub;
    }
    async verifyTransientToken(transientToken) {
        const transientTokenSecret = this.environmentService.getLoginTokenSecret();
        const payload = await this.verifyJwt(transientToken, transientTokenSecret);
        return {
            workspaceMemberId: payload.sub,
            workspaceId: payload.workspaceId,
        };
    }
    async verifyRefreshToken(refreshToken) {
        const secret = this.environmentService.getRefreshTokenSecret();
        const coolDown = this.environmentService.getRefreshTokenCoolDown();
        const jwtPayload = await this.verifyJwt(refreshToken, secret);
        (0, assert_1.assert)(jwtPayload.jti && jwtPayload.sub, 'This refresh token is malformed', common_1.UnprocessableEntityException);
        const token = await this.refreshTokenRepository.findOneBy({
            id: jwtPayload.jti,
        });
        (0, assert_1.assert)(token, "This refresh token doesn't exist", common_1.NotFoundException);
        const user = await this.userRepository.findOneBy({
            id: jwtPayload.sub,
        });
        (0, assert_1.assert)(user, 'User not found', common_1.NotFoundException);
        if (token.revokedAt &&
            token.revokedAt.getTime() <= Date.now() - (0, ms_1.default)(coolDown)) {
            await Promise.all(user.refreshTokens.map(async ({ id }) => await this.refreshTokenRepository.update({ id }, {
                revokedAt: new Date(),
            })));
            throw new common_1.ForbiddenException('Suspicious activity detected, this refresh token has been revoked. All tokens has been revoked.');
        }
        return { user, token };
    }
    async generateTokensFromRefreshToken(token) {
        const { user, token: { id }, } = await this.verifyRefreshToken(token);
        await this.refreshTokenRepository.update({
            id,
        }, {
            revokedAt: new Date(),
        });
        const accessToken = await this.generateAccessToken(user.id);
        const refreshToken = await this.generateRefreshToken(user.id);
        return {
            accessToken,
            refreshToken,
        };
    }
    computeRedirectURI(loginToken) {
        return `${this.environmentService.getFrontAuthCallbackUrl()}?loginToken=${loginToken}`;
    }
    async verifyJwt(token, secret) {
        try {
            return this.jwtService.verify(token, secret ? { secret } : undefined);
        }
        catch (error) {
            if (error instanceof jsonwebtoken_1.TokenExpiredError) {
                throw new common_1.UnauthorizedException('Token has expired.');
            }
            else if (error instanceof jsonwebtoken_1.JsonWebTokenError) {
                throw new common_1.UnauthorizedException('Token invalid.');
            }
            else {
                throw new common_1.UnprocessableEntityException();
            }
        }
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_1.InjectRepository)(user_entity_1.User, 'core')),
    __param(4, (0, typeorm_1.InjectRepository)(refresh_token_entity_1.RefreshToken, 'core')),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        jwt_auth_strategy_1.JwtAuthStrategy,
        environment_service_1.EnvironmentService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TokenService);
//# sourceMappingURL=token.service.js.map