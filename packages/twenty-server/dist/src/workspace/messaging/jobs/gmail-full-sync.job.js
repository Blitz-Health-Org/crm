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
exports.GmailFullSyncJob = void 0;
const common_1 = require("@nestjs/common");
const environment_service_1 = require("../../../integrations/environment/environment.service");
const gmail_refresh_access_token_service_1 = require("../services/gmail-refresh-access-token.service");
const gmail_full_sync_service_1 = require("../services/gmail-full-sync.service");
let GmailFullSyncJob = class GmailFullSyncJob {
    constructor(environmentService, gmailRefreshAccessTokenService, fetchWorkspaceMessagesService) {
        this.environmentService = environmentService;
        this.gmailRefreshAccessTokenService = gmailRefreshAccessTokenService;
        this.fetchWorkspaceMessagesService = fetchWorkspaceMessagesService;
    }
    async handle(data) {
        console.log(`fetching messages for workspace ${data.workspaceId} and account ${data.connectedAccountId} with ${this.environmentService.getMessageQueueDriverType()}`);
        await this.gmailRefreshAccessTokenService.refreshAndSaveAccessToken(data.workspaceId, data.connectedAccountId);
        await this.fetchWorkspaceMessagesService.fetchConnectedAccountThreads(data.workspaceId, data.connectedAccountId);
    }
};
exports.GmailFullSyncJob = GmailFullSyncJob;
exports.GmailFullSyncJob = GmailFullSyncJob = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [environment_service_1.EnvironmentService,
        gmail_refresh_access_token_service_1.GmailRefreshAccessTokenService,
        gmail_full_sync_service_1.GmailFullSyncService])
], GmailFullSyncJob);
//# sourceMappingURL=gmail-full-sync.job.js.map