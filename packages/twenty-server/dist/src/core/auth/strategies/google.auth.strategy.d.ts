import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Request } from 'express';
import { EnvironmentService } from 'src/integrations/environment/environment.service';
export type GoogleRequest = Request & {
    user: {
        firstName?: string | null;
        lastName?: string | null;
        email: string;
        picture: string | null;
        workspaceInviteHash?: string;
    };
};
declare const GoogleStrategy_base: new (...args: any[]) => Strategy;
export declare class GoogleStrategy extends GoogleStrategy_base {
    constructor(environmentService: EnvironmentService);
    authenticate(req: any, options: any): void;
    validate(request: GoogleRequest, accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<void>;
}
export {};
