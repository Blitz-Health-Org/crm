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
exports.GoogleGmailStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const passport_google_oauth20_1 = require("passport-google-oauth20");
const environment_service_1 = require("../../../integrations/environment/environment.service");
let GoogleGmailStrategy = class GoogleGmailStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy, 'google-gmail') {
    constructor(environmentService) {
        super({
            clientID: environmentService.getAuthGoogleClientId(),
            clientSecret: environmentService.getAuthGoogleClientSecret(),
            callbackURL: environmentService.getMessagingProviderGmailCallbackUrl(),
            scope: [
                'email',
                'profile',
                'https://www.googleapis.com/auth/gmail.readonly',
            ],
            passReqToCallback: true,
        });
    }
    authenticate(req, options) {
        options = Object.assign(Object.assign({}, options), { accessType: 'offline', prompt: 'consent', state: JSON.stringify({
                transientToken: req.params.transientToken,
            }) });
        return super.authenticate(req, options);
    }
    async validate(request, accessToken, refreshToken, profile, done) {
        var _a;
        const { name, emails, photos } = profile;
        const state = typeof request.query.state === 'string'
            ? JSON.parse(request.query.state)
            : undefined;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: (_a = photos === null || photos === void 0 ? void 0 : photos[0]) === null || _a === void 0 ? void 0 : _a.value,
            accessToken,
            refreshToken,
            transientToken: state.transientToken,
        };
        done(null, user);
    }
};
exports.GoogleGmailStrategy = GoogleGmailStrategy;
exports.GoogleGmailStrategy = GoogleGmailStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService])
], GoogleGmailStrategy);
//# sourceMappingURL=google-gmail.auth.strategy.js.map