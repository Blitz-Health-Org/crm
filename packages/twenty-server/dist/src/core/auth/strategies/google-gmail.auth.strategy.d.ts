import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Request } from 'express';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
export type GoogleGmailRequest = Request & {
    user: {
        firstName?: string | null;
        lastName?: string | null;
        email: string;
        picture: string | null;
        workspaceInviteHash?: string;
        accessToken: string;
        refreshToken: string;
        transientToken: string;
    };
};
declare const GoogleGmailStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleGmailStrategy extends GoogleGmailStrategy_base {
    constructor(environmentService: EnvironmentService);
    authenticate(req: any, options: any): void;
    validate(request: GoogleGmailRequest, accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<void>;
}
export {};
