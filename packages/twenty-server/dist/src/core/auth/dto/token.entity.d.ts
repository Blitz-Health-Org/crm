export declare class AuthToken {
    token: string;
    expiresAt: Date;
}
export declare class ApiKeyToken {
    token: string;
}
export declare class AuthTokenPair {
    accessToken: AuthToken;
    refreshToken: AuthToken;
}
export declare class AuthTokens {
    tokens: AuthTokenPair;
}
