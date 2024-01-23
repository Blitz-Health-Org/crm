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
exports.GmailFullSyncService = void 0;
const common_1 = require("@nestjs/common");
const fetch_messages_by_batches_service_1 = require("./fetch-messages-by-batches.service");
const gmail_client_provider_1 = require("../providers/gmail/gmail-client.provider");
const messaging_utils_service_1 = require("./messaging-utils.service");
let GmailFullSyncService = class GmailFullSyncService {
    constructor(gmailClientProvider, fetchMessagesByBatchesService, utils) {
        this.gmailClientProvider = gmailClientProvider;
        this.fetchMessagesByBatchesService = fetchMessagesByBatchesService;
        this.utils = utils;
    }
    async fetchConnectedAccountThreads(workspaceId, connectedAccountId, maxResults = 500) {
        var _a;
        const { workspaceDataSource, dataSourceMetadata, connectedAccount } = await this.utils.getDataSourceMetadataWorkspaceMetadataAndConnectedAccount(workspaceId, connectedAccountId);
        const accessToken = connectedAccount.accessToken;
        const refreshToken = connectedAccount.refreshToken;
        if (!refreshToken) {
            throw new Error('No refresh token found');
        }
        const gmailClient = await this.gmailClientProvider.getGmailClient(refreshToken);
        const messages = await gmailClient.users.messages.list({
            userId: 'me',
            maxResults,
        });
        const messagesData = messages.data.messages;
        const messageExternalIds = messagesData
            ? messagesData.map((message) => message.id || '')
            : [];
        if (!messagesData || (messagesData === null || messagesData === void 0 ? void 0 : messagesData.length) === 0) {
            return;
        }
        const { savedMessageIds, savedThreadIds } = await this.utils.getSavedMessageIdsAndThreadIds(messageExternalIds, connectedAccountId, dataSourceMetadata, workspaceDataSource);
        const messageIdsToSave = messageExternalIds.filter((messageId) => !savedMessageIds.includes(messageId));
        const messageQueries = this.utils.createQueriesFromMessageIds(messageIdsToSave);
        const { messages: messagesToSave, errors } = await this.fetchMessagesByBatchesService.fetchAllMessages(messageQueries, accessToken);
        const threads = this.utils.getThreadsFromMessages(messagesToSave);
        const threadsToSave = threads.filter((threadId) => !savedThreadIds.includes(threadId.id));
        await this.utils.saveMessageThreads(threadsToSave, dataSourceMetadata, workspaceDataSource, connectedAccount.id);
        await this.utils.saveMessages(messagesToSave, dataSourceMetadata, workspaceDataSource, connectedAccount);
        if (errors.length)
            throw new Error('Error fetching messages');
        if (messagesToSave.length === 0) {
            return;
        }
        const lastModifiedMessageId = messagesData[0].id;
        const historyId = (_a = messagesToSave.find((message) => message.externalId === lastModifiedMessageId)) === null || _a === void 0 ? void 0 : _a.historyId;
        if (!historyId)
            throw new Error('No history id found');
        await this.utils.saveLastSyncHistoryId(historyId, connectedAccount.id, dataSourceMetadata, workspaceDataSource);
    }
};
exports.GmailFullSyncService = GmailFullSyncService;
exports.GmailFullSyncService = GmailFullSyncService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [gmail_client_provider_1.GmailClientProvider,
        fetch_messages_by_batches_service_1.FetchMessagesByBatchesService,
        messaging_utils_service_1.MessagingUtilsService])
], GmailFullSyncService);
//# sourceMappingURL=gmail-full-sync.service.js.map