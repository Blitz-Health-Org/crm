import { Response } from 'express';
import { GoogleGmailRequest } from 'src/core/auth/strategies/google-gmail.auth.strategy';
import { GoogleGmailService } from 'src/core/auth/services/google-gmail.service';
import { TokenService } from 'src/core/auth/services/token.service';
export declare class GoogleGmailAuthController {
    private readonly googleGmailService;
    private readonly tokenService;
    constructor(googleGmailService: GoogleGmailService, tokenService: TokenService);
    googleAuth(): Promise<void>;
    googleAuthGetAccessToken(req: GoogleGmailRequest, res: Response): Promise<void>;
}
