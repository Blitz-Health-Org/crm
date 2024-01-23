import { ExecutionContext } from '@nestjs/common';
declare const GoogleGmailOauthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GoogleGmailOauthGuard extends GoogleGmailOauthGuard_base {
    constructor();
    canActivate(context: ExecutionContext): Promise<boolean>;
}
export {};
