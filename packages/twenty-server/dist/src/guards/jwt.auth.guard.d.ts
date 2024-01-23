import { ExecutionContext } from '@nestjs/common';
declare const JwtAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class JwtAuthGuard extends JwtAuthGuard_base {
    constructor();
    getRequest(context: ExecutionContext): any;
    handleRequest(err: any, user: any, info: any): any;
}
export {};
