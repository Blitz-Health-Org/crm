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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GmailPartialSyncService = void 0;
const common_1 = require("@nestjs/common");
const fetch_messages_by_batches_service_1 = require("./fetch-messages-by-batches.service");
const gmail_client_provider_1 = require("../providers/gmail/gmail-client.provider");
const messaging_utils_service_1 = require("./messaging-utils.service");
const message_queue_service_1 = require("../../../integrations/message-queue/services/message-queue.service");
const message_queue_constants_1 = require("../../../integrations/message-queue/message-queue.constants");
const gmail_full_sync_job_1 = require("../jobs/gmail-full-sync.job");
let GmailPartialSyncService = class GmailPartialSyncService {
    constructor(gmailClientProvider, fetchMessagesByBatchesService, utils, messageQueueService) {
        this.gmailClientProvider = gmailClientProvider;
        this.fetchMessagesByBatchesService = fetchMessagesByBatchesService;
        this.utils = utils;
        this.messageQueueService = messageQueueService;
    }
    async getHistory(workspaceId, connectedAccountId, lastSyncHistoryId, maxResults) {
        const { connectedAccount } = await this.utils.getDataSourceMetadataWorkspaceMetadataAndConnectedAccount(workspaceId, connectedAccountId);
        const gmailClient = await this.gmailClientProvider.getGmailClient(connectedAccount.refreshToken);
        const history = await gmailClient.users.history.list({
            userId: 'me',
            startHistoryId: lastSyncHistoryId,
            historyTypes: ['messageAdded', 'messageDeleted'],
            maxResults,
        });
        return history.data;
    }
    async fetchConnectedAccountThreads(workspaceId, connectedAccountId, maxResults = 500) {
        const { workspaceDataSource, dataSourceMetadata, connectedAccount } = await this.utils.getDataSourceMetadataWorkspaceMetadataAndConnectedAccount(workspaceId, connectedAccountId);
        const lastSyncHistoryId = connectedAccount.lastSyncHistoryId;
        if (!lastSyncHistoryId) {
            await this.messageQueueService.add(gmail_full_sync_job_1.GmailFullSyncJob.name, { workspaceId, connectedAccountId }, {
                id: `${workspaceId}-${connectedAccount.id}`,
                retryLimit: 2,
            });
            return;
        }
        const accessToken = connectedAccount.accessToken;
        const refreshToken = connectedAccount.refreshToken;
        if (!refreshToken) {
            throw new Error('No refresh token found');
        }
        const history = await this.getHistory(workspaceId, connectedAccountId, lastSyncHistoryId, maxResults);
        const historyId = history.historyId;
        if (!historyId) {
            throw new Error('No history id found');
        }
        if (historyId === lastSyncHistoryId) {
            return;
        }
        if (!history.history) {
            await this.utils.saveLastSyncHistoryId(historyId, connectedAccountId, dataSourceMetadata, workspaceDataSource);
            return;
        }
        const { messagesAdded, messagesDeleted } = await this.getMessageIdsAndThreadIdsFromHistory(history);
        const { savedMessageIds: messagesAddedAlreadySaved, savedThreadIds: threadsAddedAlreadySaved, } = await this.utils.getSavedMessageIdsAndThreadIds(messagesAdded, connectedAccountId, dataSourceMetadata, workspaceDataSource);
        const messageExternalIdsToSave = messagesAdded.filter((messageId) => !messagesAddedAlreadySaved.includes(messageId) &&
            !messagesDeleted.includes(messageId));
        const { savedMessageIds: messagesDeletedAlreadySaved } = await this.utils.getSavedMessageIdsAndThreadIds(messagesDeleted, connectedAccountId, dataSourceMetadata, workspaceDataSource);
        const messageExternalIdsToDelete = messagesDeleted.filter((messageId) => messagesDeletedAlreadySaved.includes(messageId));
        const messageQueries = this.utils.createQueriesFromMessageIds(messageExternalIdsToSave);
        const { messages: messagesToSave, errors } = await this.fetchMessagesByBatchesService.fetchAllMessages(messageQueries, accessToken);
        const threads = this.utils.getThreadsFromMessages(messagesToSave);
        const threadsToSave = threads.filter((thread) => !threadsAddedAlreadySaved.includes(thread.id));
        await this.utils.saveMessageThreads(threadsToSave, dataSourceMetadata, workspaceDataSource, connectedAccount.id);
        await this.utils.saveMessages(messagesToSave, dataSourceMetadata, workspaceDataSource, connectedAccount);
        await this.utils.deleteMessages(messageExternalIdsToDelete, dataSourceMetadata, workspaceDataSource);
        await this.utils.deleteEmptyThreads(messagesDeleted, connectedAccountId, dataSourceMetadata, workspaceDataSource);
        if (errors.length)
            throw new Error('Error fetching messages');
        await this.utils.saveLastSyncHistoryId(historyId, connectedAccount.id, dataSourceMetadata, workspaceDataSource);
    }
    async getMessageIdsAndThreadIdsFromHistory(history) {
        if (!history.history)
            throw new Error('No history found');
        const { messagesAdded, messagesDeleted } = history.history.reduce((acc, history) => {
            var _a, _b;
            const messagesAdded = (_a = history.messagesAdded) === null || _a === void 0 ? void 0 : _a.map((messageAdded) => { var _a; return ((_a = messageAdded.message) === null || _a === void 0 ? void 0 : _a.id) || ''; });
            const messagesDeleted = (_b = history.messagesDeleted) === null || _b === void 0 ? void 0 : _b.map((messageDeleted) => { var _a; return ((_a = messageDeleted.message) === null || _a === void 0 ? void 0 : _a.id) || ''; });
            if (messagesAdded)
                acc.messagesAdded.push(...messagesAdded);
            if (messagesDeleted)
                acc.messagesDeleted.push(...messagesDeleted);
            return acc;
        }, { messagesAdded: [], messagesDeleted: [] });
        return {
            messagesAdded,
            messagesDeleted,
        };
    }
};
exports.GmailPartialSyncService = GmailPartialSyncService;
exports.GmailPartialSyncService = GmailPartialSyncService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)(message_queue_constants_1.MessageQueue.messagingQueue)),
    __metadata("design:paramtypes", [gmail_client_provider_1.GmailClientProvider,
        fetch_messages_by_batches_service_1.FetchMessagesByBatchesService,
        messaging_utils_service_1.MessagingUtilsService,
        message_queue_service_1.MessageQueueService])
], GmailPartialSyncService);
//# sourceMappingURL=gmail-partial-sync.service.js.map