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
exports.GmailClientProvider = void 0;
const common_1 = require("@nestjs/common");
const googleapis_1 = require("googleapis");
const environment_service_1 = require("../../../../integrations/environment/environment.service");
let GmailClientProvider = class GmailClientProvider {
    constructor(environmentService) {
        this.environmentService = environmentService;
    }
    async getGmailClient(refreshToken) {
        const oAuth2Client = await this.getOAuth2Client(refreshToken);
        const gmailClient = googleapis_1.google.gmail({
            version: 'v1',
            auth: oAuth2Client,
        });
        return gmailClient;
    }
    async getOAuth2Client(refreshToken) {
        const gmailClientId = this.environmentService.getAuthGoogleClientId();
        const gmailClientSecret = this.environmentService.getAuthGoogleClientSecret();
        const oAuth2Client = new googleapis_1.google.auth.OAuth2(gmailClientId, gmailClientSecret);
        oAuth2Client.setCredentials({
            refresh_token: refreshToken,
        });
        return oAuth2Client;
    }
};
exports.GmailClientProvider = GmailClientProvider;
exports.GmailClientProvider = GmailClientProvider = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService])
], GmailClientProvider);
//# sourceMappingURL=gmail-client.provider.js.map