import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { JwtAuthStrategy } from 'src/core/auth/strategies/jwt.auth.strategy';
import { ApiKeyToken, AuthToken } from 'src/core/auth/dto/token.entity';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
import { User } from 'src/core/user/user.entity';
import { RefreshToken } from 'src/core/refresh-token/refresh-token.entity';
import { Workspace } from 'src/core/workspace/workspace.entity';
export declare class TokenService {
    private readonly jwtService;
    private readonly jwtStrategy;
    private readonly environmentService;
    private readonly userRepository;
    private readonly refreshTokenRepository;
    constructor(jwtService: JwtService, jwtStrategy: JwtAuthStrategy, environmentService: EnvironmentService, userRepository: Repository<User>, refreshTokenRepository: Repository<RefreshToken>);
    generateAccessToken(userId: string): Promise<AuthToken>;
    generateRefreshToken(userId: string): Promise<AuthToken>;
    generateLoginToken(email: string): Promise<AuthToken>;
    generateTransientToken(workspaceMemberId: string, workspaceId: string): Promise<AuthToken>;
    generateApiKeyToken(workspaceId: string, apiKeyId?: string, expiresAt?: Date | string): Promise<Pick<ApiKeyToken, 'token'> | undefined>;
    validateToken(request: Request): Promise<Workspace>;
    verifyLoginToken(loginToken: string): Promise<string>;
    verifyTransientToken(transientToken: string): Promise<{
        workspaceMemberId: string;
        workspaceId: string;
    }>;
    verifyRefreshToken(refreshToken: string): Promise<{
        user: User;
        token: RefreshToken;
    }>;
    generateTokensFromRefreshToken(token: string): Promise<{
        accessToken: AuthToken;
        refreshToken: AuthToken;
    }>;
    computeRedirectURI(loginToken: string): string;
    verifyJwt(token: string, secret?: string): Promise<any>;
}
