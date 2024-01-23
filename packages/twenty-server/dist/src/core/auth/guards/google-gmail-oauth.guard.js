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
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleGmailOauthGuard = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let GoogleGmailOauthGuard = class GoogleGmailOauthGuard extends (0, passport_1.AuthGuard)('google-gmail') {
    constructor() {
        super({
            prompt: 'select_account',
        });
    }
    async canActivate(context) {
        try {
            const request = context.switchToHttp().getRequest();
            const transientToken = request.query.transientToken;
            if (transientToken && typeof transientToken === 'string') {
                request.params.transientToken = transientToken;
            }
            const activate = (await super.canActivate(context));
            return activate;
        }
        catch (ex) {
            throw ex;
        }
    }
};
exports.GoogleGmailOauthGuard = GoogleGmailOauthGuard;
exports.GoogleGmailOauthGuard = GoogleGmailOauthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], GoogleGmailOauthGuard);
//# sourceMappingURL=google-gmail-oauth.guard.js.map